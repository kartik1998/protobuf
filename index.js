const Schema = require('./employees_pb');

const kartik = new Schema.Employee();
kartik.setId(120);
kartik.setName('Kartik');
kartik.setSalary(1200000);
// console.log(kartik.toObject())

const rehan = new Schema.Employee();
rehan.setId(190);
rehan.setName('Rehan');
rehan.setSalary(1200000);

const employees = new Schema.Employees();
employees.addEmployees(kartik);
employees.addEmployees(rehan);

const serializedBinaryData = employees.serializeBinary();
console.log({ serializedBinaryData });

const deserializedData = Schema.Employees.deserializeBinary(serializedBinaryData);
console.log({ deserializedData });