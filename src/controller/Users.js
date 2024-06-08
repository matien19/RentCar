// import Users from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/Database.js";
import {  getAllUsers } from "../models/userModel.js";


export const getUsers = (req, res) => {
  getAllUsers((error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
};

// export const getUsers = (req, res) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  

//   if (!token) {
//     return res.status(401).json({ message: 'Tidak ada token akses' });
//   }

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Token tidak valid' });
//     }

//     const email = decoded.email;
//     const query = "SELECT * FROM user WHERE email = ?";
//     db.query(query, [email], (error, results) => {
//       if (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Terjadi kesalahan server' });
//       }

//       if (results.length > 0) {
//         const user = results[0];
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'Pengguna tidak ditemukan' });
//       }
//     });
//   });
// };

export const Register = async (req, res) => {
  const saltRounds = 10;
  const sql = "INSERT INTO user (name, email, password, nomor_hp) VALUES (?,?,?,?)";
  const { name, email, password, nomor_hp } = req.body;

  if (password.length < 8) {
      return res.status(400).json({ msg: 'Password harus memiliki panjang minimal 8 karakter' });
  }

  // if (password !== confpassword) {
  //     return res.status(400).json({ msg: 'Password dan confirm password tidak cocok' });
  // }

  bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) return res.json({ Error: "Error for hashing password" });

      try{
        (await db).query(sql, [name, email, hash, nomor_hp] );// Use 'hash' instead of 'password'
          return res.json({ msg: "Register Berhasil" });
    
      }catch(error){
        console.log(error)
        res.status(500).json({ msg: 'Terjadi kesalahan saat mendaftar' });
      }
   
  });
};





export const Login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM user WHERE email = ?';

  db.query(sql, [email], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: "Terjadi kesalahan saat login" });
    }

    if (rows.length > 0) {
      const user = rows[0];
      bcrypt.compare(password, user.password, (err, match) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: "Terjadi kesalahan saat login" });
        }

        if (!match) {
          return res.status(400).json({ msg: "Password salah" });
        }

        const accessToken = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ email: email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });


        saveRefreshToken(email, refreshToken, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ msg: "Terjadi kesalahan saat login" });
          }

          res.json({ accessToken, refreshToken });
        });
      });
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
};

const saveRefreshToken = (email, refreshToken, callback) => {
  const query = 'UPDATE user SET refresh_token = ? WHERE email = ?';
  db.query(query, [refreshToken, email], (err, result) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null);
    }
  });
};





// export const Login = async (req, res) => {
//   const { email, password } = req.body;
//   const sql = 'SELECT * FROM user WHERE email = ?';
//   try {
//     const [rows, fields] = await (await db).query(sql, [email]);

//     if (rows.length > 0) {
//       const user = rows[0];
//       const match = await bcrypt.compare(password, user.password);
//       if (!match) {
//         return res.status(400).json({ msg: "Password salah" });
//       }

//       const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
//       res.json({ token: token });
//     } else {
//       res.status(401).send('Invalid credentials');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: "Terjadi kesalahan saat login" });
//   }
// };


// export const Register = async (req, res) => {
//   const { name, email, password, confpassword } = req.body;

//   if (password.length < 8) {
//       return res.status(400).json({ msg: 'Password harus memiliki panjang minimal 8 karakter' });
//   }

//   if (password !== confpassword) {
//       return res.status(400).json({ msg: 'Password dan Confirm Password tidak cocok' });
//   }

//   const salt = await bcrypt.genSalt();
//   const hashPassword = await bcrypt.hash(password, salt);

//   try{
//     await Users.create({
//       name: name,
//       email: email,
//       password: hashPassword,
//   });
//   res.json({ msg: 'Register Berhasil' });

//   }catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: 'Terjadi kesalahan saat mendaftar' });
// }

 
// };








// export const Login = async(req,res)=>{
//   try {
//     const user = await Users.findAll({
//           where:{
//               email: req.body.email
//           }
//       });

//       if (!user) {
//           return res.status(404).json({msg: "Email tidak ditemukan"});
//       }

//       const match = await bcrypt.compare(req.body.password, user[0].password);
//       if (!match) {
//           return res.status(400).json({msg: "Password salah"});
//       }

//       const userId = user[0].id;
//       const name = user[0].name;
//       const email = user[0].email;

//       // Menambahkan claim "sub" dengan nilai ID pengguna
//       const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
//           expiresIn: '120s',
//       });

     

//       const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
//           expiresIn: '1d',
//       });

//       await Users.update({refresh_token: refreshToken}, { 
//           where: {
//               id: userId
//           }
//       });

//       res.cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         maxAge: 48 * 60 * 60 * 1000,
        
//       })

//       res.json({accessToken});

//   } catch (error) {
//       console.error(error);
//       res.status(500).json({msg: "Terjadi kesalahan saat login"});
//   }

  
// };


// export const Logout = async (req, res) => {
//   res.clearCookie('token');
//   return res.sendStatus(200);
// }



// export const Logout = async (req, res) => {
//   const refreshToken = req.cookies.refreshToken;
//   if (!refreshToken) {
//     return res.sendStatus(204); // No refresh token found, return success
//   }

//   const users = await Users.findAll({
//     where: {
//       refresh_token: refreshToken
//     }
//   });

//   if(!users[0]) {
//     return res.sendStatus(204); // No user found with the provided refresh token, return success
//   }

//   const userId = users[0].id;

//   await Users.update({ refresh_token: null }, {
//     where: {
//       id: userId
//     }
//   });

//   res.clearCookies('refreshToken');
//   return res.sendStatus(200);
  
// }
  

 