let user = {
	name: "Jhon",
	surName: "Smith",
	set fullName(value){
		[this.name, this.surName] = value.split(" ");
	},
	get fullName(){
		return `${this.name} ${this.surName}`;
	}
};

let admin = {
	__proto__: user,
	isAdmin: true,
};

