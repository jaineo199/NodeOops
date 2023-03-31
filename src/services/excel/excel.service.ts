import { UserModel } from "../../models/user.model";
import XLSX from "xlsx";
export class ExcelService {
  async getExcel(req, res) {
    try {
      // retrieve data from MongoDB Mongoose collection and remove _id and __v
      const data = await UserModel.find({}, { _id: 0, __v: 0 });

      //from param check if it is true or false

      const fileTypeIs = req.query.sendFileType;

      if (fileTypeIs === "xlsx") {
        // convert data to worksheet format
        const worksheet = XLSX.utils.json_to_sheet(data);

        // create workbook and add worksheet to it
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // generate Excel file and send it to the browser for download
        const excelFileName = "mydata.xlsx";
        res.setHeader(
          "Content-Type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
          "Content-Disposition",
          `attachment; filename=${excelFileName}`
        );
        res.end(XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }));
      } else if (fileTypeIs === "csv") {
        // convert data to worksheet format
        const worksheet = XLSX.utils.json_to_sheet(data);

        // create workbook and add worksheet to it
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // generate Excel file and send it to the browser for download
        const excelFileName = "mydata.csv";
        res.setHeader("Content-Type", "text/csv");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename=${excelFileName}`
        );
        res.end(XLSX.utils.sheet_to_csv(worksheet));
      }
    } catch (err) {
      console.log(err);
    }
  }

  //insert dummy data

  async insertDummyData(req, res) {
    try {
      const insertedData = await UserModel.insertMany(req.body);

      res.send(insertedData);
    } catch (error) {
      console.log(error);
    }
  }
}
