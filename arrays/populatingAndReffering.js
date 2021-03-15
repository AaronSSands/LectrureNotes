/**
 -Arrays are containers that hold lists of items
 -denoted by square brackets []

 let list = ["item1", "item2", "item3"];
      (1)  (2)  (3)

      1.Name of the array, or list
      2.The array is within square brackets
      3.Each item, regardless of datatype, is seperated by a comma ","

 */

      let list = ["orange", "banana", "apple"]


      console.log(list[1]);

      let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan","Iesha", "Amria"]]

      console.log(students[2]);

      //Digging into nested array

      console.log("Hello" , students [6][2] + "!");
      //(Nested Array [6]) , value inside nested array (2).