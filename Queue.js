function Queue() {
	this.q = new Array();
	this.i = 0;
}

function sortOnY(a, b) {
	return (a.y > b.y) ? 1 : -1 ;
}

Queue.prototype.enqueue = function(p) {
	this.q.push(p);
}

Queue.prototype.dequeue = function() {
	this.q.sort(sortOnY);
	return this.q.pop();
}

Queue.prototype.remove = function(e) {
	var index = -1;
	for(this.i=0; this.i<this.q.length; this.i++)
	{
		if(this.q[this.i]==e){ index = this.i; break; }
	}
	this.q.splice(index, 1);
}

Queue.prototype.isEmpty = function() {
	return (this.q.length==0);
}

Queue.prototype.clear = function(b) {
	this.q = [];
}