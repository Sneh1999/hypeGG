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

    function _canSetPrimarySaleRecipient()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return true;
    }

    /// @dev Checks whether owner can be set in the given execution context.
    function _canSetOwner() internal view virtual override returns (bool) {
        return true;
    }

    /// @dev Checks whether royalty info can be set in the given execution context.
    function _canSetRoyaltyInfo()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return true;
    }

    /// @dev Checks whether contract metadata can be set in the given execution context.
    function _canSetContractURI()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return true;
    }

    /// @dev Checks whether platform fee info can be set in the given execution context.
    function _canSetClaimConditions()
        internal
        view
        virtual
        override
        returns (bool)
    {
        return true;
    }

    /// @dev Returns whether lazy minting can be done in the given execution context.
    function _canLazyMint() internal view virtual override returns (bool) {
        return true;
    }

    /// @dev Returns whether operator restriction can be set in the given execution context.
    function _canSetOperatorRestriction()
        internal
        virtual
        override
        returns (bool)
    {
        return true;
    }

    /// @dev Checks whether NFTs can be revealed in the given execution context.
    function _canReveal() internal view virtual override returns (bool) {
        return true;
    }
}
