const handleHttpError = (res, message = "Someting is wrong", code = 403) => {
    res.status(code)
    res.send({ error: mesage })

}

module.exports = handleHttpError;