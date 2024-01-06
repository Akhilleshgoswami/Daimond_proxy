// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../libraries/AppStorage.sol";
// Example library to show a simple example of diamond storage
import "@solidstate/contracts/access/access_control/AccessControl.sol";
import {AccessControlStorage} from "@solidstate/contracts/access/access_control/AccessControlStorage.sol";
import "hardhat/console.sol";
contract ContractA is AccessControl {
    TestState internal s;
    function initialize() external {
        _grantRole(AccessControlStorage.DEFAULT_ADMIN_ROLE, msg.sender);
        s.admin = msg.sender;
    }
    function getAdmin()external view returns(  address ){
     return s.admin;
    }

    bool private locked;
    modifier reentrancyGuard() {
        require(!locked, "Reentrant call detected");
        locked = true;
        _;
        locked = false;
    }
    modifier onlyAdmin() {
    
        require(_hasRole(AccessControlStorage.DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not admin");
        _;
    }
    function getNum() external view onlyAdmin returns (uint256) {

        return s.num;
    }
    function setNum(uint256 num) external onlyAdmin reentrancyGuard {
        s.num = s.num + num;
    }
}
