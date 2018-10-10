showList();
function $get(selecter){
	return document.querySelectorAll(selecter);
}
function $create(tageName){
	return document.createElement(tageName);
}
function $appendBody(ele){
	document.body.appendChild(ele); 
}
function showList(){

	let oTbody = $get('#tbody')[0];

	ajax.get("php/show.php",function(data){
		console.log(data);
	
		var json = JSON.parse(data);
		// console.log(json);
		
		for(let i = 0,len = json.length;i < len;i ++){
			let tr = $create('tr');
			tr.className = 'text-center middle';
			
			let str = `
				<td>${json[i].wid}</td>
				<td>${json[i].content}</td>
				<td>${json[i].where}</td>
				<td>${json[i].idea}</td>
				<td>
					<button class="btn del" data-wq-id = "${json[i].wid}">删除</button>
				</td>
				<td>
					<button class="btn update" data-wq-id = "${json[i].wid}">
						<span class="glyphicon glyphicon-cog">修改</span>
					</button>
				</td>
			`;
			tr.innerHTML = str;
			oTbody.appendChild(tr);
		}
	})
}