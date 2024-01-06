// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ContractB.sol";
contract NewContractA is ContractB {
    function getNum() external view onlyAdmin returns (uint256) {
        return s.num;
    }
    function setNum(uint256 num) external onlyAdmin reentrancyGuard {
        s.num = s.num + num;
    }
    function getAdmin() external view returns (address) {
        return s.admin;
    }

}
