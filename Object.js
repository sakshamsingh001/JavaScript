
// this is how i can create a object through function 
// OBJECT consructor 

// function emp(id,name,sallary)
// {
//     this.id=id,
//     this.name=name,
//     this.sallary=sallary
// }
// let e=new emp(12,"Saksham",100000);
// console.log(e)
// console.log(typeof (e))

// BY  CREATING A INSTANCE OF OBJECT 
// let a =new Object();
// console.log(a);

// OBJECT LITERAL

 object={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
object2=
{
    key4:"value4",
    key5:"value5",
    key6:"value6"
}

//Methods on Object 

// Object.assign(object,object2)  //1
// console.log(object)

// const a=Object.create(object)
// a.key1="tuitui";
// console.log(a.key1) //tuitui
// console.log(object.key1) //value1


// IT GIVES NON-ENUMERABLE PROPERTY
// Object.defineProperty(object,"newvalue",{value:"new me"})
// console.log(object.newvalue)
// console.log(object)

// IT ALSO GIVES NON-ENUMERABLE PROPERTY
// Object.defineProperties(object,
//     {
//         newkey:{value:1},
//         newkey2:{value:"new value2"}

//     }
// )
// console.log(object.newkey + " " + object.newkey2) //1 new value2
// console.log(object)

// ARRAY BNAA KE DE DEGA 
// let arr=Object.entries(object)
// console.log(arr) // [["key1","value1"],["key2","value2"],["key3


// Object.freeze(object2)
// object2.key4="change value"
// console.log(object2.key4)


// console.log(Object.getOwnPropertyDescriptor(object,"key1"));

// console.log(Object.getOwnPropertyDescriptors(object))

// console.log(Object.getOwnPropertyNames(object))

// console.log(Object.getOwnPropertySymbols(object))

// console.log(Object.keys(object))
// console.log(Object.values(object))
// console.log(Object.entries(object))

// console.log(Object.getPrototypeOf(object))


// console.log(Object.is(object.key1,object2.key4))
// Object.preventExtensions(object)

// console.log(Object.isExtensible(object))

// console.log(Object.isFrozen(object))

// console.log(Object.isSealed(object))








