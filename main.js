const {XMLParser, XMLBuilder} = require("fast-xml-parser");
const fs = require("node:fs");

var array = [];
const xml = fs.readFileSync("./data.xml", "utf-8");

const parser = new XMLParser();
let obj = parser.parse(xml);
const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
    arrayNodeName: "indicators"
});
const data = obj.indicators.banksincexp;
for(let i = 0; i < Object.keys(data).length; i++)
{
    if(data[i].txt === "Доходи, усього" || data[i].txt === "Витрати, усього")
    {
        const item = {  
              txt: data[i].txt,
              value: data[i].value,
          };
        array.push(item);
    }
}

const output = builder.build(array)

fs.writeFile("./output.xml", `<data> ${output} </data>`, (err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("data is successfuly written");
    }
})