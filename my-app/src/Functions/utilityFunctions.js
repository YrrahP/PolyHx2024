function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // rayon de la Terre en mètres
    const radLat1 = lat1 * Math.PI / 180; 
    const radLat2 = lat2 * Math.PI / 180;
    const deltaLat = (lat2 - lat1) * Math.PI / 180;
    const deltaLon = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(radLat1) * Math.cos(radLat2) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance en mètres
}


export function filterLocationsByDistanceAndType(userLat, userLon, locations, maxDistance, filterType) {
    return locations
        .filter(location => {
            // Filtrer par type si filterType est spécifié
            return !filterType || location.type === filterType;
        })
        .filter(location => {
            // Filtrer par distance
            const distance = calculateDistance(userLat, userLon, location.location.latitude, location.location.longitude);
            return distance <= maxDistance;
        })
        .sort((a, b) => {
            // Trier par distance
            const distanceA = calculateDistance(userLat, userLon, a.location.latitude, a.location.longitude);
            const distanceB = calculateDistance(userLat, userLon, b.location.latitude, b.location.longitude);
            return distanceA - distanceB;
        });
}





