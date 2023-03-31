import { ExcelService } from "../../services/excel/excel.service";

const excelService = new ExcelService();
export class ExcelController {
  getExcel(req, res): any {
    return excelService.getExcel(req, res);
  }

  insertDummyData(req, res): any {
    return excelService.insertDummyData(req, res);
  }
}
