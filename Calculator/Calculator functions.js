let output=document.getElementById("output");

function display(symbol)
{
	output.value+=symbol;
}

function Calculate()
{
	try
	{
		output.value=eval(output.value);
	}
	catch(error)
	{
		alert("Invalid"+ error)
		output.value="";
	}
}

function del()
{
	output.value=output.value.slice(0,-1);
}

function ClearScreen()
{
	output.value="";
}