class ByteArray {
	constructor(buffer) {
		this.buffer = buffer ? Buffer.from(buffer) : Buffer.alloc(0);
	}

	writeByte(value) {
		let buffer = new Buffer.alloc(1);
		buffer.writeInt8(value);
		this.buffer = Buffer.concat([this.buffer, buffer]);
		return this;
	}

	writeUByte(value) {
		let buffer = new Buffer.alloc(1);
		buffer.writeUInt8(value);
		this.buffer = Buffer.concat([this.buffer, buffer]);
		return this;
	}

	writeShort(value) {
		let buffer = new Buffer.alloc(2);
		buffer.writeInt16BE(value);
		this.buffer = Buffer.concat([this.buffer, buffer]);
		return this;
	}
	
	writeUShort(value) {
		let buffer = new Buffer.alloc(2);
		buffer.writeUInt16BE(value);
		this.buffer = Buffer.concat([this.buffer, buffer]);
		return this;
	}
	
	writeInt(value) {
		let buffer = new Buffer.alloc(4);
		buffer.writeInt32BE(value);
		this.buffer = Buffer.concat([this.buffer, buffer]);
		return this;
	}
	
	writeUInt(value) {
		let buffer = new Buffer.alloc(4);
		buffer.writeUInt32BE(value);
		this.buffer = Buffer.concat([this.buffer, buffer]);
		return this;
	}
	
	writeUTF(value) {
		return this.writeUShort(value.length).write(value);
	}
	
	writeBoolean(value) {
		return this.writeByte(value ? 1 : 0);
	}
	
	write(value) {
		this.buffer = Buffer.concat([this.buffer, new Buffer.from(value)]);
		return this;
	}
	
	readByte() {
		let value = this.buffer.slice(0, 1).readInt8();
		this.buffer = this.buffer.slice(1);

		return parseInt(value)
	}

	readUByte() {
		let value = this.buffer.slice(0, 1).readUInt8();
		this.buffer = this.buffer.slice(1);

		return parseInt(value)
	}

	readShort() {
		let value = this.buffer.slice(0, 2).readInt16BE();
		this.buffer = this.buffer.slice(2);

		return parseInt(value)
	}
	
	readUShort() {
		let value = this.buffer.slice(0, 2).readUInt16BE();
		this.buffer = this.buffer.slice(2);

		return parseInt(value)
	}
	
	readInt() {
		let value = this.buffer.slice(0, 4).readInt32BE();
		this.buffer = this.buffer.slice(4);

		return parseInt(value)
	}
	
	readUInt() {
		let value = this.buffer.slice(0, 4).readUInt32BE();
		this.buffer = this.buffer.slice(4);

		return parseInt(value)
	}
	
	readUTF() {
		let len = this.readUShort();
		let str = this.buffer.slice(0, len)
		this.buffer = this.buffer.slice(len);

		return str;
	}
	
	readBoolean() {
		return this.readByte() !== 0;
	}
}

module.exports = ByteArray