# Appiness-Task

##**Steps to Run**:

1. Download the zip file
2. Unzip it.
3. You can import it Visaul Studio Code(Open Terminal) or Run by CMD
4. Navigate inside of Appiness-Task(cd Appiness-Task-master)
5. Run "npm install" to import all npm modules
6. Navigate inside of src folder
7. Run node index.js
8. Open another CMD or terminal

##**Steps to Run MongoDB**:

1.Install MongoDB <br/>
2.Create a folder mongodb-data for string data <br/>
3.To start mongo,run below command inside of Appiness-Task-master(/bin/mongod.exe --dbpath=/mongodb-data) <br/>
4.make sure you give correct path to data folder and run it <br/>
5.Install Robo3T(connect to MongoDB)  for visualization and connect to mongo db localhost:27017 <br/>


##------------------------------**Collection Structure in MongoDB**---------------

 >>>>>>      catalog|
>>>>>>>>>>         |-categories
>>>>>>>>>>         |-products

**Categories:**<br/>
<br/>
/* 1 */
{
    "_id" : ObjectId("5e8759cf338a9a24d80c3c0e"),
    "name" : "Computer Accessories",
    "__v" : 0
}

/* 2 */
{
    "_id" : ObjectId("5e875a09338a9a24d80c3c0f"),
    "name" : "Mobile",
    "__v" : 0
}

/* 3 */
{
    "_id" : ObjectId("5e875a0e338a9a24d80c3c10"),
    "name" : "Fashion",
    "__v" : 0
}

**products:**<br/>
<br/>

/* 1 */
{
    "_id" : ObjectId("5e875aaa338a9a24d80c3c11"),
    "name" : "Hm Shirt",
    "description" : "An HM Product",
    "owner" : "Fashion",
    "__v" : 0
}

/* 2 */
{
    "_id" : ObjectId("5e875ac5338a9a24d80c3c12"),
    "name" : "iPhone11",
    "description" : "An Apple Product",
    "owner" : "Mobile",
    "__v" : 0
}

/* 3 */
{
    "_id" : ObjectId("5e875ad2338a9a24d80c3c13"),
    "name" : "Honor9",
    "description" : "An Honor Product",
    "owner" : "Mobile",
    "__v" : 0
}

/* 4 */
{
    "_id" : ObjectId("5e875aed338a9a24d80c3c14"),
    "name" : "Hp Mouse",
    "description" : "An HP Product",
    "owner" : "Computer Accessories",
    "__v" : 0
}


<br/>**RelationShip between Caterory and Prodcut:**<br/>
Category "name" is taken as foreign field in products as "owner".<br/>
So When you retrieve category ,it will retreive corresponding products that belongs that particular category.<br/>


##**API TESTING**

**AddNewCategory:**<br/>
endpoint: localhost:3000/addNewCategory<br/>
method:post<br/>
requestBody:<br/>
            {
              "name":"Mobile"
            }

<br/>Add multiple Category similary One by One<br/>

**AddNewProduct:**<br/>
endpoint: localhost:3000/addNewProduct<br/>
method:post<br/>
requestBody:<br/>
            {
            "name":"iPhone11",
            "description":"An Apple Product",
            "owner":"Mobile"
	          }

<br/>You add mutiple similarly one by one<br/>
            
<br/>#If you see above category "Mobile" has been taken as owner in Product to provide one-to-many relationship<br/>

**getAllCategoryWithProducts:**<br/>
endpoint: localhost:3000/getAllCategoryWithProducts<br/>
method:get<br/>

Response:<br/>
[
    {
        "name": "Mobile",
        "productsArr": [
            {
                "name": "iPhone11",
                "description": "An Apple Product",
                "owner": "Mobile"
            },
            {
                "name": "Honor9",
                "description": "An Honor Product",
                "owner": "Mobile"
            }
        ]
    }
]


<br/>If you see Response ,productsArr[] property is there which I am generating as virtual field uisng moongoose schema for Category which contains all products belonging to a particular category.<br/>



















