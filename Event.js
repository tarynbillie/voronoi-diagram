function Event(p, pe) {
	this.point = p;
	this.pe = pe;
	this.y = p.y;
	this.key = Math.random() * 100;
	
	this.arch = null;
	this.value = 0;
}

Event.prototype.compare = function(other) {
	return((this.y > other.y) ? 1 : -1);
}