// pragma solidity ^0.8.0;
// library TestLib {

//   bytes32 constant DIAMOND_STORAGE_POSITION = keccak256("diamond.standard.test.storage");


//   function diamondStorage() internal pure returns (TestState storage ds) {
//       bytes32 position = DIAMOND_STORAGE_POSITION;
//       assembly {
//           ds.slot := position
//       }
//   }

//   function setMyAddress(address _myAddress) internal {
//     TestState storage testState = diamondStorage();
//     testState.myAddress = _myAddress;
//   }

//   function getMyAddress() internal view returns (address) {
//     TestState storage testState = diamondStorage();
//     return testState.myAddress;
//   }
// }