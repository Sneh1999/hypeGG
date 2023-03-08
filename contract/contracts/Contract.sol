// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155Drop.sol";

contract HypeGG is ERC1155Drop {
    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        address _primarySaleRecipient
    ) ERC1155Drop(_name, _symbol, msg.sender, 0, msg.sender) {}

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public override {
        require(from == address(0), "SBTs Can't be transferred");
        super.safeTransferFrom(from, to, id, amount, data);
    }

    function _canLazyMint() internal view override returns (bool) {
        return msg.sender != address(0);
    }
}
