const express = require("express");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const cors = require("cors");

const pool = require("./db/pool");


const profileRouter = require("./routes/profileRouter");
const resumeRouter = require("./routes/resumeRouter");
const databaseRouter = require("./routes/databaseRouter");

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username],
      );
      const user = rows[0];
      if (!user) return done(null, false, { message: "Incorrect username" });

      if (user.password !== password)
        return done(null, false, { message: "Incorrect password" });

      return done(null, user, { message: "Logged In" });
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [id],
    );
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use("/profile", profileRouter);
app.use("/resume", resumeRouter);
app.use("/database", databaseRouter);


app.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(info);
    }
    const { user_id, username } = user;
    res.json({ ...info, user_id, username });
  })(req, res, next);
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    await pool.query("INSERT INTO user(username, password) VALUES ($1, $2)", [
      username,
      password,
    ]);
    res.status(200).json({ res: "OK" });
  } catch (e) {
    res.status(404).json({ res: 404 });
  }
});

app.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return res.json({ status: err });
    }
    res.json({ status: "Logged out" });
  });
});

app.listen(3000, () => console.log("Server running"));
