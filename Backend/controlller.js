exports.getDataController = (req, res) => {
    try {
        console.log(req.body);
        const {num1, num2, op} = req.body;
        if(!num1 || !num2 || !op)
        {
            return res.status(201).send({
                success : false,
                message : "Error in getting data in the controller"
            })
        }
        let ans;
        switch (op){
            case '+':
                ans = num1 + num2;
                break;
            case '-':
                ans = num1 - num2;
                break;
            case '*':
                ans = num1 * num2;
                break;
            case '/':
                ans = num1 / num2;
                break;
        }
        return res.status(200).send({
            success : true,
            message : "Calculation done successfully",
            ans
        })
    } catch (error) {
        return res.status(301).send({
            success : false,
            message : "Error in getting data controller",
            error
        })
    }
}