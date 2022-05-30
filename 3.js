// /**
//  * @param {number} n
//  * @param {number} m
//  */
//  var BookMyShow = function(n, m) {
//     return 1 <= n <= 5 * 104
//   };
  
//   /** 
//    * @param {number} k 
//    * @param {number} maxRow
//    * @return {number[]}
//    */
//   BookMyShow.prototype.gather = function(k, maxRow) {
//   };
  
//   /** 
//    * @param {number} k 
//    * @param {number} maxRow
//    * @return {boolean}
//    */
//   BookMyShow.prototype.scatter = function(k, maxRow) {
//       return 0 <= maxRow <= n - 1 
//   };
  
//   /** 
//    * Your BookMyShow object will be instantiated and called as such:
//    * var obj = new BookMyShow(n, m)
//    * var param_1 = obj.gather(k,maxRow)
//    * var param_2 = obj.scatter(k,maxRow)
//    */

// A concert hall has n rows numbered from 0 to n - 1, each with m seats, numbered from 0 to m - 1. You need to design a ticketing system that can allocate seats in the following cases:

// If a group of k spectators can sit together in a row.
// If every member of a group of k spectators can get a seat. They may or may not sit together.
// Note that the spectators are very picky. Hence:

// They will book seats only if each member of their group can get a seat with row number less than or equal to maxRow. maxRow can vary from group to group.
// In case there are multiple rows to choose from, the row with the smallest number is chosen. If there are multiple seats to choose in the same row, the seat with the smallest number is chosen.
// Implement the BookMyShow class:

// BookMyShow(int n, int m) Initializes the object with n as number of rows and m as number of seats per row.
// int[] gather(int k, int maxRow) Returns an array of length 2 denoting the row and seat number (respectively) of the first seat being allocated to the k members of the group, who must sit together. In other words, it returns the smallest possible r and c such that all [c, c + k - 1] seats are valid and empty in row r, and r <= maxRow. Returns [] in case it is not possible to allocate seats to the group.
// boolean scatter(int k, int maxRow) Returns true if all k members of the group can be allocated seats in rows 0 to maxRow, who may or may not sit together. If the seats can be allocated, it allocates k seats to the group with the smallest row numbers, and the smallest possible seat numbers in each row. Otherwise, returns false.
 

// Example 1:

// Input
// ["BookMyShow", "gather", "gather", "scatter", "scatter"]
// [[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]]
// Output
// [null, [0, 0], [], true, false]

// Explanation
// BookMyShow bms = new BookMyShow(2, 5); // There are 2 rows with 5 seats each 
// bms.gather(4, 0); // return [0, 0]
//                   // The group books seats [0, 3] of row 0. 
// bms.gather(2, 0); // return []
//                   // There is only 1 seat left in row 0,
//                   // so it is not possible to book 2 consecutive seats. 
// bms.scatter(5, 1); // return True
//                    // The group books seat 4 of row 0 and seats [0, 3] of row 1. 
// bms.scatter(5, 1); // return False
//                    // There are only 2 seats left in the hall.


// Constraints:

// 1 <= n <= 10^5
// 1 <= m <= 10^5
// 1 <= k <= 10^5
// 0 <= maxRow <= n - 1
// maxRow is guaranteed to be less than or equal to n - 1.
// The number of calls to gather and scatter is at most 100 * n * m * k.
// At most 100 * n * m * k calls to gather and scatter will be made.

// Solution 1:

class BookMyShow {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.rows = new Array(n);
    this.seats = new Array(n);
    for (let i = 0; i < n; i++) {
      this.rows[i] = new Array(m);
      this.seats[i] = new Array(m);
      for (let j = 0; j < m; j++) {
        this.rows[i][j] = i;
        this.seats[i][j] = j;
      }
    }
  }
  gather(k, maxRow) {
    let minRow = 0;
    let minSeat = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i <= maxRow; i++) {
      for (let j = 0; j < this.seats[i].length; j++) {
        if (this.seats[i][j] < min) {
          min = this.seats[i][j];
          minRow = i;
          minSeat = this.seats[i][j];
        }
      }
    }
    if (minSeat + k <= this.m - 1) {
      for (let i = 0; i < k; i++) {
        this.seats[minRow][minSeat + i] = -1;
      }
      return [minRow, minSeat];
    } else {
      return [];
    }
  }
  scatter(k, maxRow) {
    let rows = new Array(maxRow + 1);
    for (let i = 0; i <= maxRow; i++) {
      rows[i] = new Array(this.seats[i].length);
      for (let j = 0; j < this.seats[i].length; j++) {
        rows[i][j] = this.seats[i][j];
      }
    }
    for (let i = 0; i <= maxRow; i++) {
      for (let j = 0; j < this.seats[i].length; j++) {
        if (this.seats[i][j] === -1) {
          for (let k = 0; k < rows[i].length; k++) {
            if (rows[i][k] === -1) {
              continue;
            } else {
              this.seats[i][j] = rows[i][k];
              rows[i][k] = -1;
              break;
            }
          }
        }
      }
    }
    for (let i = 0; i <= maxRow; i++) {
      for (let j = 0; j < this.seats[i].length; j++) {
        if (this.seats[i][j] === -1) {
          return false;
        }
      }
    }
    return true;
  }
}

let n = ["BookMyShow", "gather", "gather", "scatter", "scatter"]
let m = [[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]]

let clasesdemate = new BookMyShow(2, 5);
// Solution 2: