// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@solidstate/contracts/access/access_control/AccessControl.sol";
import {AccessControlStorage} from "@solidstate/contracts/access/access_control/AccessControlStorage.sol";
import "../libraries/AppStorage.sol";
import "hardhat/console.sol";

contract ContractB is AccessControl {
    TestState internal s;

    function initializeFunc() external {
        s.superAdmin = msg.sender;
    }

    modifier onlyAdmin() {
        require(_hasRole(AccessControlStorage.DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not admin");
        _;
    }
    modifier onlySuperAdmin() {
        require(msg.sender == s.superAdmin, "Unauthorized: Only admin can perform this operation");
        _;
    }
    bool private locked;
    modifier reentrancyGuard() {
        require(!locked, "Reentrant call detected");
        locked = true;
        _;
        locked = false;
    }

    function addAdmin(address newAdmin) public onlySuperAdmin {
        _grantRole(AccessControlStorage.DEFAULT_ADMIN_ROLE, newAdmin);
    }

    function removeAdmin(address adminAddress) public onlySuperAdmin {
        _revokeRole(AccessControlStorage.DEFAULT_ADMIN_ROLE, adminAddress);
    }

    function tansferAdminRole(address oldAdmin, address newAdmin) external onlySuperAdmin virtual {
        addAdmin(newAdmin);
        removeAdmin(oldAdmin);
    }

    function transferSuperAdminRole(address newAdmin) external onlySuperAdmin {
        s.superAdmin = newAdmin;
    }

    function changeAdmin(address newAdmin) external onlySuperAdmin{
        removeAdmin(s.admin);
        s.admin = newAdmin;
        addAdmin(newAdmin);
    }
}
