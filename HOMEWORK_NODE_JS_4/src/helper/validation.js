const validPostKey = (req, res, next) => {
    req.body.hasOwnProperty
    if (!req.body.hasOwnProperty("user_id") && !req.body.hasOwnProperty("img")) throw new Error(`No valid JSON`);
    next()

}
const validEmail = (req, res, next) => {
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(req.body.email)) throw new Error('Try entering your email again');
    next()
}

module.exports = {
    validPostKey,
    validEmail
}