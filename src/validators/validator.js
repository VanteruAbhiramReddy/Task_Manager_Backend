const validator = (schema) => (req,res,next) => {
    const validated = schema.parse(req.body);
    req.validated = validated;
    next()
}

export default validator;