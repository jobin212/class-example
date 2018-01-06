const capitalize = str => {
    const lowStr = str.toLowerCase();
    return lowStr[0].toUpperCase() + lowStr.slice(1);
}

module.exports = capitalize;