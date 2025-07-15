import "./feeTable.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FeeTable = ({ tableData = [] }) => {


  return (
    <div className="fee-page-gap">
      {tableData.map((semester, sIndex) => (
        <div key={sIndex} className="fee-semester">
          <h3 className="semester-title">{semester.title}</h3>
          <table className="fee-table">
            <thead>
              <tr>
                <th>Core/Elective</th>
                <th>Module Code</th>
                <th>Module Name</th>
                <th>Credit Load</th>
                <th>Module Fee</th>
              </tr>
            </thead>
            <tbody>
              {semester.modules.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.credit}</td>
                  <td>{item.fee}</td>
                </tr>
              ))}
              {/* Summary row */}
              <tr className="summary-row">
                <td colSpan={3} className="table-bold-text">{semester.title}</td>
                <td className="table-bold-text">{semester.totalCredit}</td>
                <td className="table-bold-text">{semester.totalFee}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FeeTable;
