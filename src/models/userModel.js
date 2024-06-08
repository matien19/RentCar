import connection from "../config/Database.js";



export const getAllUsers = (callback) => {
    const query = "SELECT * FROM user WHERE 'token_refresh' = ?";
    connection.query(query, ['token_refresh'], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results);
    });
  };