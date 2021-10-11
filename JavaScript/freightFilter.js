function scanAndFilter(freightItems, forbiddenString) {
    return freightItems.filter(
        function fuckMePls(value) {
            return forbiddenString !== value;
        }
    );
}