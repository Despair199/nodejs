const fs = require ('fs')

fs.writeFile('welcome.txt', 'welcome to Node', function(err,data){
    if(err) {
        return console.log(err)
    }
    console.log('File Created Successfully')
}
)