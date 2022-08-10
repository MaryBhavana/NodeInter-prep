const content = (req,res)=>
{
    res.send(
        [
            {
                id:1,
                name:"smily",
                course:"mern"
            },
            {
                id:2,
                name:"sony",
                course:"mern"
            },
            {
                id:3,
                name:"supriya",
                course:"mern"
            },
            {
                id:4,
                name:"fasna",
                course:"mern"
            }
        ]
    )
}
module.exports.api = content;