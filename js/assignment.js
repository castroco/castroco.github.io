
function addUpdatedDate() {
    try {
        var dateUpdated = document.lastModified;
        const pObj = document.querySelector('#lastUpdated');
        message = `Last updated ${dateUpdated}`;
        console.log(message);
        pObj.innerHTML = message;
    }
        catch(err) {
        alert(err.message);
        console.log(err.message);
    }
}