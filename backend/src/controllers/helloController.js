import pool from "../db.js";

class HelloController {
  static async index(_request, response) {
    try {
      const result = await pool.query(
        "SELECT * FROM video_game_sales LIMIT 30;"
      );
      response.json({
        success: true,
        data: result.rows,
      });
    } catch (error) {
      console.error("Error executing query", error.stack);
      response.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}

export default HelloController;
