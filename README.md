# Node.js ByteArray

Node.js ByteArray a simple implementation of ActionScript 3 ByteArray

# Install

```
$ npm install bytearray-nodejs --save
```
# Usage

```js
var ByteArray = require('bytearray-nodejs');
var buff = new ByteArray();
buff.writeUTF("Hello").writeUInt(100000);
buff.readUTF(); // return "Hello"
buff.readUInt(); // return 100000
```

* bytearray.write(value:):bytearray
* bytearray.writeByte(value:Int):bytearray
* bytearray.writeUByte(value:UInt):bytearray
* bytearray.writeShort(value:Int):bytearray
* bytearray.writeUShort(value:UInt):bytearray
* bytearray.writeInt(value:Int):bytearray
* bytearray.writeUInt(value:UInt):bytearray
* bytearray.writeUTF(value:String):bytearray
* bytearray.writeBoolean(value:Int):bytearray
* bytearray.readByte():Int
* bytearray.readUByte():UInt
* bytearray.readShort():Int
* bytearray.readUShort():UInt
* bytearray.readInt():Int
* bytearray.readUInt():UInt
* bytearray.readUTF():String
* bytearray.readBoolean():Boolean

License
----

MIT
