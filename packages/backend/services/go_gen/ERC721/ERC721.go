// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package ERC721

import (
	"errors"
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// ERC721MetaData contains all meta data concerning the ERC721 contract.
var ERC721MetaData = &bind.MetaData{
	ABI: "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"BURN_ADDRESS\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name_\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol_\",\"type\":\"string\"}],\"name\":\"__ERC721A_init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"affiliatesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_recipients\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amount\",\"type\":\"uint256[]\"}],\"name\":\"airdrop\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_maxSupply\",\"type\":\"uint256\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxPerMint\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxPerWallet\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"count\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintAll\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"open\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"count\",\"type\":\"uint32\"},{\"internalType\":\"bytes32[]\",\"name\":\"proof\",\"type\":\"bytes32[]\"}],\"name\":\"presaleMint\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"presaleOpen\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"referralCap\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint32\",\"name\":\"count\",\"type\":\"uint32\"},{\"internalType\":\"address\",\"name\":\"referrer\",\"type\":\"address\"}],\"name\":\"referralMint\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"referralOpen\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"reqToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"revealed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_salePrice\",\"type\":\"uint256\"}],\"name\":\"royaltyInfo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"royaltyAmount\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_val1\",\"type\":\"uint256\"}],\"name\":\"setCommission\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"supply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_open\",\"type\":\"bool\"},{\"internalType\":\"bytes32\",\"name\":\"root\",\"type\":\"bytes32\"}],\"name\":\"updatePresale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_open\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"_val\",\"type\":\"uint256\"}],\"name\":\"updateReferral\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"updateReqToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_revealed\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"_uri\",\"type\":\"string\"}],\"name\":\"updateReveal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_fee\",\"type\":\"uint256\"}],\"name\":\"updateRoyalties\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_open\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"_cost\",\"type\":\"uint256\"},{\"internalType\":\"uint32\",\"name\":\"_maxW\",\"type\":\"uint32\"},{\"internalType\":\"uint32\",\"name\":\"_maxM\",\"type\":\"uint32\"}],\"name\":\"updateSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}]",
}

// ERC721ABI is the input ABI used to generate the binding from.
// Deprecated: Use ERC721MetaData.ABI instead.
var ERC721ABI = ERC721MetaData.ABI

// ERC721 is an auto generated Go binding around an Ethereum contract.
type ERC721 struct {
	ERC721Caller     // Read-only binding to the contract
	ERC721Transactor // Write-only binding to the contract
	ERC721Filterer   // Log filterer for contract events
}

// ERC721Caller is an auto generated read-only Go binding around an Ethereum contract.
type ERC721Caller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ERC721Transactor is an auto generated write-only Go binding around an Ethereum contract.
type ERC721Transactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ERC721Filterer is an auto generated log filtering Go binding around an Ethereum contract events.
type ERC721Filterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ERC721Session is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type ERC721Session struct {
	Contract     *ERC721           // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// ERC721CallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type ERC721CallerSession struct {
	Contract *ERC721Caller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts // Call options to use throughout this session
}

// ERC721TransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type ERC721TransactorSession struct {
	Contract     *ERC721Transactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// ERC721Raw is an auto generated low-level Go binding around an Ethereum contract.
type ERC721Raw struct {
	Contract *ERC721 // Generic contract binding to access the raw methods on
}

// ERC721CallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type ERC721CallerRaw struct {
	Contract *ERC721Caller // Generic read-only contract binding to access the raw methods on
}

// ERC721TransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type ERC721TransactorRaw struct {
	Contract *ERC721Transactor // Generic write-only contract binding to access the raw methods on
}

// NewERC721 creates a new instance of ERC721, bound to a specific deployed contract.
func NewERC721(address common.Address, backend bind.ContractBackend) (*ERC721, error) {
	contract, err := bindERC721(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &ERC721{ERC721Caller: ERC721Caller{contract: contract}, ERC721Transactor: ERC721Transactor{contract: contract}, ERC721Filterer: ERC721Filterer{contract: contract}}, nil
}

// NewERC721Caller creates a new read-only instance of ERC721, bound to a specific deployed contract.
func NewERC721Caller(address common.Address, caller bind.ContractCaller) (*ERC721Caller, error) {
	contract, err := bindERC721(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &ERC721Caller{contract: contract}, nil
}

// NewERC721Transactor creates a new write-only instance of ERC721, bound to a specific deployed contract.
func NewERC721Transactor(address common.Address, transactor bind.ContractTransactor) (*ERC721Transactor, error) {
	contract, err := bindERC721(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &ERC721Transactor{contract: contract}, nil
}

// NewERC721Filterer creates a new log filterer instance of ERC721, bound to a specific deployed contract.
func NewERC721Filterer(address common.Address, filterer bind.ContractFilterer) (*ERC721Filterer, error) {
	contract, err := bindERC721(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &ERC721Filterer{contract: contract}, nil
}

// bindERC721 binds a generic wrapper to an already deployed contract.
func bindERC721(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(ERC721ABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_ERC721 *ERC721Raw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _ERC721.Contract.ERC721Caller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_ERC721 *ERC721Raw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _ERC721.Contract.ERC721Transactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_ERC721 *ERC721Raw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _ERC721.Contract.ERC721Transactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_ERC721 *ERC721CallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _ERC721.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_ERC721 *ERC721TransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _ERC721.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_ERC721 *ERC721TransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _ERC721.Contract.contract.Transact(opts, method, params...)
}

// BURNADDRESS is a free data retrieval call binding the contract method 0xfccc2813.
//
// Solidity: function BURN_ADDRESS() view returns(address)
func (_ERC721 *ERC721Caller) BURNADDRESS(opts *bind.CallOpts) (common.Address, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "BURN_ADDRESS")

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// BURNADDRESS is a free data retrieval call binding the contract method 0xfccc2813.
//
// Solidity: function BURN_ADDRESS() view returns(address)
func (_ERC721 *ERC721Session) BURNADDRESS() (common.Address, error) {
	return _ERC721.Contract.BURNADDRESS(&_ERC721.CallOpts)
}

// BURNADDRESS is a free data retrieval call binding the contract method 0xfccc2813.
//
// Solidity: function BURN_ADDRESS() view returns(address)
func (_ERC721 *ERC721CallerSession) BURNADDRESS() (common.Address, error) {
	return _ERC721.Contract.BURNADDRESS(&_ERC721.CallOpts)
}

// AffiliatesOf is a free data retrieval call binding the contract method 0xd6c5b414.
//
// Solidity: function affiliatesOf(address owner) view returns(uint256)
func (_ERC721 *ERC721Caller) AffiliatesOf(opts *bind.CallOpts, owner common.Address) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "affiliatesOf", owner)

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// AffiliatesOf is a free data retrieval call binding the contract method 0xd6c5b414.
//
// Solidity: function affiliatesOf(address owner) view returns(uint256)
func (_ERC721 *ERC721Session) AffiliatesOf(owner common.Address) (*big.Int, error) {
	return _ERC721.Contract.AffiliatesOf(&_ERC721.CallOpts, owner)
}

// AffiliatesOf is a free data retrieval call binding the contract method 0xd6c5b414.
//
// Solidity: function affiliatesOf(address owner) view returns(uint256)
func (_ERC721 *ERC721CallerSession) AffiliatesOf(owner common.Address) (*big.Int, error) {
	return _ERC721.Contract.AffiliatesOf(&_ERC721.CallOpts, owner)
}

// BalanceOf is a free data retrieval call binding the contract method 0x70a08231.
//
// Solidity: function balanceOf(address owner) view returns(uint256)
func (_ERC721 *ERC721Caller) BalanceOf(opts *bind.CallOpts, owner common.Address) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "balanceOf", owner)

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// BalanceOf is a free data retrieval call binding the contract method 0x70a08231.
//
// Solidity: function balanceOf(address owner) view returns(uint256)
func (_ERC721 *ERC721Session) BalanceOf(owner common.Address) (*big.Int, error) {
	return _ERC721.Contract.BalanceOf(&_ERC721.CallOpts, owner)
}

// BalanceOf is a free data retrieval call binding the contract method 0x70a08231.
//
// Solidity: function balanceOf(address owner) view returns(uint256)
func (_ERC721 *ERC721CallerSession) BalanceOf(owner common.Address) (*big.Int, error) {
	return _ERC721.Contract.BalanceOf(&_ERC721.CallOpts, owner)
}

// Cost is a free data retrieval call binding the contract method 0x13faede6.
//
// Solidity: function cost() view returns(uint256)
func (_ERC721 *ERC721Caller) Cost(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "cost")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// Cost is a free data retrieval call binding the contract method 0x13faede6.
//
// Solidity: function cost() view returns(uint256)
func (_ERC721 *ERC721Session) Cost() (*big.Int, error) {
	return _ERC721.Contract.Cost(&_ERC721.CallOpts)
}

// Cost is a free data retrieval call binding the contract method 0x13faede6.
//
// Solidity: function cost() view returns(uint256)
func (_ERC721 *ERC721CallerSession) Cost() (*big.Int, error) {
	return _ERC721.Contract.Cost(&_ERC721.CallOpts)
}

// GetApproved is a free data retrieval call binding the contract method 0x081812fc.
//
// Solidity: function getApproved(uint256 tokenId) view returns(address)
func (_ERC721 *ERC721Caller) GetApproved(opts *bind.CallOpts, tokenId *big.Int) (common.Address, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "getApproved", tokenId)

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// GetApproved is a free data retrieval call binding the contract method 0x081812fc.
//
// Solidity: function getApproved(uint256 tokenId) view returns(address)
func (_ERC721 *ERC721Session) GetApproved(tokenId *big.Int) (common.Address, error) {
	return _ERC721.Contract.GetApproved(&_ERC721.CallOpts, tokenId)
}

// GetApproved is a free data retrieval call binding the contract method 0x081812fc.
//
// Solidity: function getApproved(uint256 tokenId) view returns(address)
func (_ERC721 *ERC721CallerSession) GetApproved(tokenId *big.Int) (common.Address, error) {
	return _ERC721.Contract.GetApproved(&_ERC721.CallOpts, tokenId)
}

// IsApprovedForAll is a free data retrieval call binding the contract method 0xe985e9c5.
//
// Solidity: function isApprovedForAll(address owner, address operator) view returns(bool)
func (_ERC721 *ERC721Caller) IsApprovedForAll(opts *bind.CallOpts, owner common.Address, operator common.Address) (bool, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "isApprovedForAll", owner, operator)

	if err != nil {
		return *new(bool), err
	}

	out0 := *abi.ConvertType(out[0], new(bool)).(*bool)

	return out0, err

}

// IsApprovedForAll is a free data retrieval call binding the contract method 0xe985e9c5.
//
// Solidity: function isApprovedForAll(address owner, address operator) view returns(bool)
func (_ERC721 *ERC721Session) IsApprovedForAll(owner common.Address, operator common.Address) (bool, error) {
	return _ERC721.Contract.IsApprovedForAll(&_ERC721.CallOpts, owner, operator)
}

// IsApprovedForAll is a free data retrieval call binding the contract method 0xe985e9c5.
//
// Solidity: function isApprovedForAll(address owner, address operator) view returns(bool)
func (_ERC721 *ERC721CallerSession) IsApprovedForAll(owner common.Address, operator common.Address) (bool, error) {
	return _ERC721.Contract.IsApprovedForAll(&_ERC721.CallOpts, owner, operator)
}

// MaxPerMint is a free data retrieval call binding the contract method 0x507e094f.
//
// Solidity: function maxPerMint() view returns(uint32)
func (_ERC721 *ERC721Caller) MaxPerMint(opts *bind.CallOpts) (uint32, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "maxPerMint")

	if err != nil {
		return *new(uint32), err
	}

	out0 := *abi.ConvertType(out[0], new(uint32)).(*uint32)

	return out0, err

}

// MaxPerMint is a free data retrieval call binding the contract method 0x507e094f.
//
// Solidity: function maxPerMint() view returns(uint32)
func (_ERC721 *ERC721Session) MaxPerMint() (uint32, error) {
	return _ERC721.Contract.MaxPerMint(&_ERC721.CallOpts)
}

// MaxPerMint is a free data retrieval call binding the contract method 0x507e094f.
//
// Solidity: function maxPerMint() view returns(uint32)
func (_ERC721 *ERC721CallerSession) MaxPerMint() (uint32, error) {
	return _ERC721.Contract.MaxPerMint(&_ERC721.CallOpts)
}

// MaxPerWallet is a free data retrieval call binding the contract method 0x453c2310.
//
// Solidity: function maxPerWallet() view returns(uint32)
func (_ERC721 *ERC721Caller) MaxPerWallet(opts *bind.CallOpts) (uint32, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "maxPerWallet")

	if err != nil {
		return *new(uint32), err
	}

	out0 := *abi.ConvertType(out[0], new(uint32)).(*uint32)

	return out0, err

}

// MaxPerWallet is a free data retrieval call binding the contract method 0x453c2310.
//
// Solidity: function maxPerWallet() view returns(uint32)
func (_ERC721 *ERC721Session) MaxPerWallet() (uint32, error) {
	return _ERC721.Contract.MaxPerWallet(&_ERC721.CallOpts)
}

// MaxPerWallet is a free data retrieval call binding the contract method 0x453c2310.
//
// Solidity: function maxPerWallet() view returns(uint32)
func (_ERC721 *ERC721CallerSession) MaxPerWallet() (uint32, error) {
	return _ERC721.Contract.MaxPerWallet(&_ERC721.CallOpts)
}

// Name is a free data retrieval call binding the contract method 0x06fdde03.
//
// Solidity: function name() view returns(string)
func (_ERC721 *ERC721Caller) Name(opts *bind.CallOpts) (string, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "name")

	if err != nil {
		return *new(string), err
	}

	out0 := *abi.ConvertType(out[0], new(string)).(*string)

	return out0, err

}

// Name is a free data retrieval call binding the contract method 0x06fdde03.
//
// Solidity: function name() view returns(string)
func (_ERC721 *ERC721Session) Name() (string, error) {
	return _ERC721.Contract.Name(&_ERC721.CallOpts)
}

// Name is a free data retrieval call binding the contract method 0x06fdde03.
//
// Solidity: function name() view returns(string)
func (_ERC721 *ERC721CallerSession) Name() (string, error) {
	return _ERC721.Contract.Name(&_ERC721.CallOpts)
}

// Open is a free data retrieval call binding the contract method 0xfcfff16f.
//
// Solidity: function open() view returns(bool)
func (_ERC721 *ERC721Caller) Open(opts *bind.CallOpts) (bool, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "open")

	if err != nil {
		return *new(bool), err
	}

	out0 := *abi.ConvertType(out[0], new(bool)).(*bool)

	return out0, err

}

// Open is a free data retrieval call binding the contract method 0xfcfff16f.
//
// Solidity: function open() view returns(bool)
func (_ERC721 *ERC721Session) Open() (bool, error) {
	return _ERC721.Contract.Open(&_ERC721.CallOpts)
}

// Open is a free data retrieval call binding the contract method 0xfcfff16f.
//
// Solidity: function open() view returns(bool)
func (_ERC721 *ERC721CallerSession) Open() (bool, error) {
	return _ERC721.Contract.Open(&_ERC721.CallOpts)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_ERC721 *ERC721Caller) Owner(opts *bind.CallOpts) (common.Address, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "owner")

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_ERC721 *ERC721Session) Owner() (common.Address, error) {
	return _ERC721.Contract.Owner(&_ERC721.CallOpts)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_ERC721 *ERC721CallerSession) Owner() (common.Address, error) {
	return _ERC721.Contract.Owner(&_ERC721.CallOpts)
}

// OwnerOf is a free data retrieval call binding the contract method 0x6352211e.
//
// Solidity: function ownerOf(uint256 tokenId) view returns(address)
func (_ERC721 *ERC721Caller) OwnerOf(opts *bind.CallOpts, tokenId *big.Int) (common.Address, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "ownerOf", tokenId)

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// OwnerOf is a free data retrieval call binding the contract method 0x6352211e.
//
// Solidity: function ownerOf(uint256 tokenId) view returns(address)
func (_ERC721 *ERC721Session) OwnerOf(tokenId *big.Int) (common.Address, error) {
	return _ERC721.Contract.OwnerOf(&_ERC721.CallOpts, tokenId)
}

// OwnerOf is a free data retrieval call binding the contract method 0x6352211e.
//
// Solidity: function ownerOf(uint256 tokenId) view returns(address)
func (_ERC721 *ERC721CallerSession) OwnerOf(tokenId *big.Int) (common.Address, error) {
	return _ERC721.Contract.OwnerOf(&_ERC721.CallOpts, tokenId)
}

// PresaleOpen is a free data retrieval call binding the contract method 0xbee6348a.
//
// Solidity: function presaleOpen() view returns(bool)
func (_ERC721 *ERC721Caller) PresaleOpen(opts *bind.CallOpts) (bool, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "presaleOpen")

	if err != nil {
		return *new(bool), err
	}

	out0 := *abi.ConvertType(out[0], new(bool)).(*bool)

	return out0, err

}

// PresaleOpen is a free data retrieval call binding the contract method 0xbee6348a.
//
// Solidity: function presaleOpen() view returns(bool)
func (_ERC721 *ERC721Session) PresaleOpen() (bool, error) {
	return _ERC721.Contract.PresaleOpen(&_ERC721.CallOpts)
}

// PresaleOpen is a free data retrieval call binding the contract method 0xbee6348a.
//
// Solidity: function presaleOpen() view returns(bool)
func (_ERC721 *ERC721CallerSession) PresaleOpen() (bool, error) {
	return _ERC721.Contract.PresaleOpen(&_ERC721.CallOpts)
}

// ReferralCap is a free data retrieval call binding the contract method 0xdfdd9b9a.
//
// Solidity: function referralCap() view returns(uint256)
func (_ERC721 *ERC721Caller) ReferralCap(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "referralCap")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// ReferralCap is a free data retrieval call binding the contract method 0xdfdd9b9a.
//
// Solidity: function referralCap() view returns(uint256)
func (_ERC721 *ERC721Session) ReferralCap() (*big.Int, error) {
	return _ERC721.Contract.ReferralCap(&_ERC721.CallOpts)
}

// ReferralCap is a free data retrieval call binding the contract method 0xdfdd9b9a.
//
// Solidity: function referralCap() view returns(uint256)
func (_ERC721 *ERC721CallerSession) ReferralCap() (*big.Int, error) {
	return _ERC721.Contract.ReferralCap(&_ERC721.CallOpts)
}

// ReferralOpen is a free data retrieval call binding the contract method 0x64bb1061.
//
// Solidity: function referralOpen() view returns(bool)
func (_ERC721 *ERC721Caller) ReferralOpen(opts *bind.CallOpts) (bool, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "referralOpen")

	if err != nil {
		return *new(bool), err
	}

	out0 := *abi.ConvertType(out[0], new(bool)).(*bool)

	return out0, err

}

// ReferralOpen is a free data retrieval call binding the contract method 0x64bb1061.
//
// Solidity: function referralOpen() view returns(bool)
func (_ERC721 *ERC721Session) ReferralOpen() (bool, error) {
	return _ERC721.Contract.ReferralOpen(&_ERC721.CallOpts)
}

// ReferralOpen is a free data retrieval call binding the contract method 0x64bb1061.
//
// Solidity: function referralOpen() view returns(bool)
func (_ERC721 *ERC721CallerSession) ReferralOpen() (bool, error) {
	return _ERC721.Contract.ReferralOpen(&_ERC721.CallOpts)
}

// ReqToken is a free data retrieval call binding the contract method 0xc7d12610.
//
// Solidity: function reqToken() view returns(address)
func (_ERC721 *ERC721Caller) ReqToken(opts *bind.CallOpts) (common.Address, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "reqToken")

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// ReqToken is a free data retrieval call binding the contract method 0xc7d12610.
//
// Solidity: function reqToken() view returns(address)
func (_ERC721 *ERC721Session) ReqToken() (common.Address, error) {
	return _ERC721.Contract.ReqToken(&_ERC721.CallOpts)
}

// ReqToken is a free data retrieval call binding the contract method 0xc7d12610.
//
// Solidity: function reqToken() view returns(address)
func (_ERC721 *ERC721CallerSession) ReqToken() (common.Address, error) {
	return _ERC721.Contract.ReqToken(&_ERC721.CallOpts)
}

// Revealed is a free data retrieval call binding the contract method 0x51830227.
//
// Solidity: function revealed() view returns(bool)
func (_ERC721 *ERC721Caller) Revealed(opts *bind.CallOpts) (bool, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "revealed")

	if err != nil {
		return *new(bool), err
	}

	out0 := *abi.ConvertType(out[0], new(bool)).(*bool)

	return out0, err

}

// Revealed is a free data retrieval call binding the contract method 0x51830227.
//
// Solidity: function revealed() view returns(bool)
func (_ERC721 *ERC721Session) Revealed() (bool, error) {
	return _ERC721.Contract.Revealed(&_ERC721.CallOpts)
}

// Revealed is a free data retrieval call binding the contract method 0x51830227.
//
// Solidity: function revealed() view returns(bool)
func (_ERC721 *ERC721CallerSession) Revealed() (bool, error) {
	return _ERC721.Contract.Revealed(&_ERC721.CallOpts)
}

// RoyaltyInfo is a free data retrieval call binding the contract method 0x2a55205a.
//
// Solidity: function royaltyInfo(uint256 _tokenId, uint256 _salePrice) view returns(address receiver, uint256 royaltyAmount)
func (_ERC721 *ERC721Caller) RoyaltyInfo(opts *bind.CallOpts, _tokenId *big.Int, _salePrice *big.Int) (struct {
	Receiver      common.Address
	RoyaltyAmount *big.Int
}, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "royaltyInfo", _tokenId, _salePrice)

	outstruct := new(struct {
		Receiver      common.Address
		RoyaltyAmount *big.Int
	})
	if err != nil {
		return *outstruct, err
	}

	outstruct.Receiver = *abi.ConvertType(out[0], new(common.Address)).(*common.Address)
	outstruct.RoyaltyAmount = *abi.ConvertType(out[1], new(*big.Int)).(**big.Int)

	return *outstruct, err

}

// RoyaltyInfo is a free data retrieval call binding the contract method 0x2a55205a.
//
// Solidity: function royaltyInfo(uint256 _tokenId, uint256 _salePrice) view returns(address receiver, uint256 royaltyAmount)
func (_ERC721 *ERC721Session) RoyaltyInfo(_tokenId *big.Int, _salePrice *big.Int) (struct {
	Receiver      common.Address
	RoyaltyAmount *big.Int
}, error) {
	return _ERC721.Contract.RoyaltyInfo(&_ERC721.CallOpts, _tokenId, _salePrice)
}

// RoyaltyInfo is a free data retrieval call binding the contract method 0x2a55205a.
//
// Solidity: function royaltyInfo(uint256 _tokenId, uint256 _salePrice) view returns(address receiver, uint256 royaltyAmount)
func (_ERC721 *ERC721CallerSession) RoyaltyInfo(_tokenId *big.Int, _salePrice *big.Int) (struct {
	Receiver      common.Address
	RoyaltyAmount *big.Int
}, error) {
	return _ERC721.Contract.RoyaltyInfo(&_ERC721.CallOpts, _tokenId, _salePrice)
}

// Supply is a free data retrieval call binding the contract method 0x047fc9aa.
//
// Solidity: function supply() view returns(uint256)
func (_ERC721 *ERC721Caller) Supply(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "supply")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// Supply is a free data retrieval call binding the contract method 0x047fc9aa.
//
// Solidity: function supply() view returns(uint256)
func (_ERC721 *ERC721Session) Supply() (*big.Int, error) {
	return _ERC721.Contract.Supply(&_ERC721.CallOpts)
}

// Supply is a free data retrieval call binding the contract method 0x047fc9aa.
//
// Solidity: function supply() view returns(uint256)
func (_ERC721 *ERC721CallerSession) Supply() (*big.Int, error) {
	return _ERC721.Contract.Supply(&_ERC721.CallOpts)
}

// SupportsInterface is a free data retrieval call binding the contract method 0x01ffc9a7.
//
// Solidity: function supportsInterface(bytes4 interfaceId) view returns(bool)
func (_ERC721 *ERC721Caller) SupportsInterface(opts *bind.CallOpts, interfaceId [4]byte) (bool, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "supportsInterface", interfaceId)

	if err != nil {
		return *new(bool), err
	}

	out0 := *abi.ConvertType(out[0], new(bool)).(*bool)

	return out0, err

}

// SupportsInterface is a free data retrieval call binding the contract method 0x01ffc9a7.
//
// Solidity: function supportsInterface(bytes4 interfaceId) view returns(bool)
func (_ERC721 *ERC721Session) SupportsInterface(interfaceId [4]byte) (bool, error) {
	return _ERC721.Contract.SupportsInterface(&_ERC721.CallOpts, interfaceId)
}

// SupportsInterface is a free data retrieval call binding the contract method 0x01ffc9a7.
//
// Solidity: function supportsInterface(bytes4 interfaceId) view returns(bool)
func (_ERC721 *ERC721CallerSession) SupportsInterface(interfaceId [4]byte) (bool, error) {
	return _ERC721.Contract.SupportsInterface(&_ERC721.CallOpts, interfaceId)
}

// Symbol is a free data retrieval call binding the contract method 0x95d89b41.
//
// Solidity: function symbol() view returns(string)
func (_ERC721 *ERC721Caller) Symbol(opts *bind.CallOpts) (string, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "symbol")

	if err != nil {
		return *new(string), err
	}

	out0 := *abi.ConvertType(out[0], new(string)).(*string)

	return out0, err

}

// Symbol is a free data retrieval call binding the contract method 0x95d89b41.
//
// Solidity: function symbol() view returns(string)
func (_ERC721 *ERC721Session) Symbol() (string, error) {
	return _ERC721.Contract.Symbol(&_ERC721.CallOpts)
}

// Symbol is a free data retrieval call binding the contract method 0x95d89b41.
//
// Solidity: function symbol() view returns(string)
func (_ERC721 *ERC721CallerSession) Symbol() (string, error) {
	return _ERC721.Contract.Symbol(&_ERC721.CallOpts)
}

// TokenByIndex is a free data retrieval call binding the contract method 0x4f6ccce7.
//
// Solidity: function tokenByIndex(uint256 index) view returns(uint256)
func (_ERC721 *ERC721Caller) TokenByIndex(opts *bind.CallOpts, index *big.Int) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "tokenByIndex", index)

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// TokenByIndex is a free data retrieval call binding the contract method 0x4f6ccce7.
//
// Solidity: function tokenByIndex(uint256 index) view returns(uint256)
func (_ERC721 *ERC721Session) TokenByIndex(index *big.Int) (*big.Int, error) {
	return _ERC721.Contract.TokenByIndex(&_ERC721.CallOpts, index)
}

// TokenByIndex is a free data retrieval call binding the contract method 0x4f6ccce7.
//
// Solidity: function tokenByIndex(uint256 index) view returns(uint256)
func (_ERC721 *ERC721CallerSession) TokenByIndex(index *big.Int) (*big.Int, error) {
	return _ERC721.Contract.TokenByIndex(&_ERC721.CallOpts, index)
}

// TokenOfOwnerByIndex is a free data retrieval call binding the contract method 0x2f745c59.
//
// Solidity: function tokenOfOwnerByIndex(address owner, uint256 index) view returns(uint256)
func (_ERC721 *ERC721Caller) TokenOfOwnerByIndex(opts *bind.CallOpts, owner common.Address, index *big.Int) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "tokenOfOwnerByIndex", owner, index)

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// TokenOfOwnerByIndex is a free data retrieval call binding the contract method 0x2f745c59.
//
// Solidity: function tokenOfOwnerByIndex(address owner, uint256 index) view returns(uint256)
func (_ERC721 *ERC721Session) TokenOfOwnerByIndex(owner common.Address, index *big.Int) (*big.Int, error) {
	return _ERC721.Contract.TokenOfOwnerByIndex(&_ERC721.CallOpts, owner, index)
}

// TokenOfOwnerByIndex is a free data retrieval call binding the contract method 0x2f745c59.
//
// Solidity: function tokenOfOwnerByIndex(address owner, uint256 index) view returns(uint256)
func (_ERC721 *ERC721CallerSession) TokenOfOwnerByIndex(owner common.Address, index *big.Int) (*big.Int, error) {
	return _ERC721.Contract.TokenOfOwnerByIndex(&_ERC721.CallOpts, owner, index)
}

// TokenURI is a free data retrieval call binding the contract method 0xc87b56dd.
//
// Solidity: function tokenURI(uint256 _tokenId) view returns(string)
func (_ERC721 *ERC721Caller) TokenURI(opts *bind.CallOpts, _tokenId *big.Int) (string, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "tokenURI", _tokenId)

	if err != nil {
		return *new(string), err
	}

	out0 := *abi.ConvertType(out[0], new(string)).(*string)

	return out0, err

}

// TokenURI is a free data retrieval call binding the contract method 0xc87b56dd.
//
// Solidity: function tokenURI(uint256 _tokenId) view returns(string)
func (_ERC721 *ERC721Session) TokenURI(_tokenId *big.Int) (string, error) {
	return _ERC721.Contract.TokenURI(&_ERC721.CallOpts, _tokenId)
}

// TokenURI is a free data retrieval call binding the contract method 0xc87b56dd.
//
// Solidity: function tokenURI(uint256 _tokenId) view returns(string)
func (_ERC721 *ERC721CallerSession) TokenURI(_tokenId *big.Int) (string, error) {
	return _ERC721.Contract.TokenURI(&_ERC721.CallOpts, _tokenId)
}

// TotalSupply is a free data retrieval call binding the contract method 0x18160ddd.
//
// Solidity: function totalSupply() view returns(uint256)
func (_ERC721 *ERC721Caller) TotalSupply(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _ERC721.contract.Call(opts, &out, "totalSupply")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// TotalSupply is a free data retrieval call binding the contract method 0x18160ddd.
//
// Solidity: function totalSupply() view returns(uint256)
func (_ERC721 *ERC721Session) TotalSupply() (*big.Int, error) {
	return _ERC721.Contract.TotalSupply(&_ERC721.CallOpts)
}

// TotalSupply is a free data retrieval call binding the contract method 0x18160ddd.
//
// Solidity: function totalSupply() view returns(uint256)
func (_ERC721 *ERC721CallerSession) TotalSupply() (*big.Int, error) {
	return _ERC721.Contract.TotalSupply(&_ERC721.CallOpts)
}

// ERC721AInit is a paid mutator transaction binding the contract method 0xd2f01f19.
//
// Solidity: function __ERC721A_init(string name_, string symbol_) returns()
func (_ERC721 *ERC721Transactor) ERC721AInit(opts *bind.TransactOpts, name_ string, symbol_ string) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "__ERC721A_init", name_, symbol_)
}

// ERC721AInit is a paid mutator transaction binding the contract method 0xd2f01f19.
//
// Solidity: function __ERC721A_init(string name_, string symbol_) returns()
func (_ERC721 *ERC721Session) ERC721AInit(name_ string, symbol_ string) (*types.Transaction, error) {
	return _ERC721.Contract.ERC721AInit(&_ERC721.TransactOpts, name_, symbol_)
}

// ERC721AInit is a paid mutator transaction binding the contract method 0xd2f01f19.
//
// Solidity: function __ERC721A_init(string name_, string symbol_) returns()
func (_ERC721 *ERC721TransactorSession) ERC721AInit(name_ string, symbol_ string) (*types.Transaction, error) {
	return _ERC721.Contract.ERC721AInit(&_ERC721.TransactOpts, name_, symbol_)
}

// Airdrop is a paid mutator transaction binding the contract method 0x67243482.
//
// Solidity: function airdrop(address[] _recipients, uint256[] _amount) returns()
func (_ERC721 *ERC721Transactor) Airdrop(opts *bind.TransactOpts, _recipients []common.Address, _amount []*big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "airdrop", _recipients, _amount)
}

// Airdrop is a paid mutator transaction binding the contract method 0x67243482.
//
// Solidity: function airdrop(address[] _recipients, uint256[] _amount) returns()
func (_ERC721 *ERC721Session) Airdrop(_recipients []common.Address, _amount []*big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Airdrop(&_ERC721.TransactOpts, _recipients, _amount)
}

// Airdrop is a paid mutator transaction binding the contract method 0x67243482.
//
// Solidity: function airdrop(address[] _recipients, uint256[] _amount) returns()
func (_ERC721 *ERC721TransactorSession) Airdrop(_recipients []common.Address, _amount []*big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Airdrop(&_ERC721.TransactOpts, _recipients, _amount)
}

// Approve is a paid mutator transaction binding the contract method 0x095ea7b3.
//
// Solidity: function approve(address to, uint256 tokenId) returns()
func (_ERC721 *ERC721Transactor) Approve(opts *bind.TransactOpts, to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "approve", to, tokenId)
}

// Approve is a paid mutator transaction binding the contract method 0x095ea7b3.
//
// Solidity: function approve(address to, uint256 tokenId) returns()
func (_ERC721 *ERC721Session) Approve(to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Approve(&_ERC721.TransactOpts, to, tokenId)
}

// Approve is a paid mutator transaction binding the contract method 0x095ea7b3.
//
// Solidity: function approve(address to, uint256 tokenId) returns()
func (_ERC721 *ERC721TransactorSession) Approve(to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Approve(&_ERC721.TransactOpts, to, tokenId)
}

// Initialize is a paid mutator transaction binding the contract method 0xb119490e.
//
// Solidity: function initialize(string _name, string _symbol, uint256 _maxSupply) returns()
func (_ERC721 *ERC721Transactor) Initialize(opts *bind.TransactOpts, _name string, _symbol string, _maxSupply *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "initialize", _name, _symbol, _maxSupply)
}

// Initialize is a paid mutator transaction binding the contract method 0xb119490e.
//
// Solidity: function initialize(string _name, string _symbol, uint256 _maxSupply) returns()
func (_ERC721 *ERC721Session) Initialize(_name string, _symbol string, _maxSupply *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Initialize(&_ERC721.TransactOpts, _name, _symbol, _maxSupply)
}

// Initialize is a paid mutator transaction binding the contract method 0xb119490e.
//
// Solidity: function initialize(string _name, string _symbol, uint256 _maxSupply) returns()
func (_ERC721 *ERC721TransactorSession) Initialize(_name string, _symbol string, _maxSupply *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Initialize(&_ERC721.TransactOpts, _name, _symbol, _maxSupply)
}

// Mint is a paid mutator transaction binding the contract method 0xa0712d68.
//
// Solidity: function mint(uint256 count) payable returns()
func (_ERC721 *ERC721Transactor) Mint(opts *bind.TransactOpts, count *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "mint", count)
}

// Mint is a paid mutator transaction binding the contract method 0xa0712d68.
//
// Solidity: function mint(uint256 count) payable returns()
func (_ERC721 *ERC721Session) Mint(count *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Mint(&_ERC721.TransactOpts, count)
}

// Mint is a paid mutator transaction binding the contract method 0xa0712d68.
//
// Solidity: function mint(uint256 count) payable returns()
func (_ERC721 *ERC721TransactorSession) Mint(count *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.Mint(&_ERC721.TransactOpts, count)
}

// MintAll is a paid mutator transaction binding the contract method 0x595882b3.
//
// Solidity: function mintAll() payable returns()
func (_ERC721 *ERC721Transactor) MintAll(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "mintAll")
}

// MintAll is a paid mutator transaction binding the contract method 0x595882b3.
//
// Solidity: function mintAll() payable returns()
func (_ERC721 *ERC721Session) MintAll() (*types.Transaction, error) {
	return _ERC721.Contract.MintAll(&_ERC721.TransactOpts)
}

// MintAll is a paid mutator transaction binding the contract method 0x595882b3.
//
// Solidity: function mintAll() payable returns()
func (_ERC721 *ERC721TransactorSession) MintAll() (*types.Transaction, error) {
	return _ERC721.Contract.MintAll(&_ERC721.TransactOpts)
}

// PresaleMint is a paid mutator transaction binding the contract method 0x0364d22a.
//
// Solidity: function presaleMint(uint32 count, bytes32[] proof) payable returns()
func (_ERC721 *ERC721Transactor) PresaleMint(opts *bind.TransactOpts, count uint32, proof [][32]byte) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "presaleMint", count, proof)
}

// PresaleMint is a paid mutator transaction binding the contract method 0x0364d22a.
//
// Solidity: function presaleMint(uint32 count, bytes32[] proof) payable returns()
func (_ERC721 *ERC721Session) PresaleMint(count uint32, proof [][32]byte) (*types.Transaction, error) {
	return _ERC721.Contract.PresaleMint(&_ERC721.TransactOpts, count, proof)
}

// PresaleMint is a paid mutator transaction binding the contract method 0x0364d22a.
//
// Solidity: function presaleMint(uint32 count, bytes32[] proof) payable returns()
func (_ERC721 *ERC721TransactorSession) PresaleMint(count uint32, proof [][32]byte) (*types.Transaction, error) {
	return _ERC721.Contract.PresaleMint(&_ERC721.TransactOpts, count, proof)
}

// ReferralMint is a paid mutator transaction binding the contract method 0xf179dca1.
//
// Solidity: function referralMint(uint32 count, address referrer) payable returns()
func (_ERC721 *ERC721Transactor) ReferralMint(opts *bind.TransactOpts, count uint32, referrer common.Address) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "referralMint", count, referrer)
}

// ReferralMint is a paid mutator transaction binding the contract method 0xf179dca1.
//
// Solidity: function referralMint(uint32 count, address referrer) payable returns()
func (_ERC721 *ERC721Session) ReferralMint(count uint32, referrer common.Address) (*types.Transaction, error) {
	return _ERC721.Contract.ReferralMint(&_ERC721.TransactOpts, count, referrer)
}

// ReferralMint is a paid mutator transaction binding the contract method 0xf179dca1.
//
// Solidity: function referralMint(uint32 count, address referrer) payable returns()
func (_ERC721 *ERC721TransactorSession) ReferralMint(count uint32, referrer common.Address) (*types.Transaction, error) {
	return _ERC721.Contract.ReferralMint(&_ERC721.TransactOpts, count, referrer)
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_ERC721 *ERC721Transactor) RenounceOwnership(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "renounceOwnership")
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_ERC721 *ERC721Session) RenounceOwnership() (*types.Transaction, error) {
	return _ERC721.Contract.RenounceOwnership(&_ERC721.TransactOpts)
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_ERC721 *ERC721TransactorSession) RenounceOwnership() (*types.Transaction, error) {
	return _ERC721.Contract.RenounceOwnership(&_ERC721.TransactOpts)
}

// SafeTransferFrom is a paid mutator transaction binding the contract method 0x42842e0e.
//
// Solidity: function safeTransferFrom(address from, address to, uint256 tokenId) returns()
func (_ERC721 *ERC721Transactor) SafeTransferFrom(opts *bind.TransactOpts, from common.Address, to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "safeTransferFrom", from, to, tokenId)
}

// SafeTransferFrom is a paid mutator transaction binding the contract method 0x42842e0e.
//
// Solidity: function safeTransferFrom(address from, address to, uint256 tokenId) returns()
func (_ERC721 *ERC721Session) SafeTransferFrom(from common.Address, to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.SafeTransferFrom(&_ERC721.TransactOpts, from, to, tokenId)
}

// SafeTransferFrom is a paid mutator transaction binding the contract method 0x42842e0e.
//
// Solidity: function safeTransferFrom(address from, address to, uint256 tokenId) returns()
func (_ERC721 *ERC721TransactorSession) SafeTransferFrom(from common.Address, to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.SafeTransferFrom(&_ERC721.TransactOpts, from, to, tokenId)
}

// SafeTransferFrom0 is a paid mutator transaction binding the contract method 0xb88d4fde.
//
// Solidity: function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) returns()
func (_ERC721 *ERC721Transactor) SafeTransferFrom0(opts *bind.TransactOpts, from common.Address, to common.Address, tokenId *big.Int, _data []byte) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "safeTransferFrom0", from, to, tokenId, _data)
}

// SafeTransferFrom0 is a paid mutator transaction binding the contract method 0xb88d4fde.
//
// Solidity: function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) returns()
func (_ERC721 *ERC721Session) SafeTransferFrom0(from common.Address, to common.Address, tokenId *big.Int, _data []byte) (*types.Transaction, error) {
	return _ERC721.Contract.SafeTransferFrom0(&_ERC721.TransactOpts, from, to, tokenId, _data)
}

// SafeTransferFrom0 is a paid mutator transaction binding the contract method 0xb88d4fde.
//
// Solidity: function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) returns()
func (_ERC721 *ERC721TransactorSession) SafeTransferFrom0(from common.Address, to common.Address, tokenId *big.Int, _data []byte) (*types.Transaction, error) {
	return _ERC721.Contract.SafeTransferFrom0(&_ERC721.TransactOpts, from, to, tokenId, _data)
}

// SetApprovalForAll is a paid mutator transaction binding the contract method 0xa22cb465.
//
// Solidity: function setApprovalForAll(address operator, bool approved) returns()
func (_ERC721 *ERC721Transactor) SetApprovalForAll(opts *bind.TransactOpts, operator common.Address, approved bool) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "setApprovalForAll", operator, approved)
}

// SetApprovalForAll is a paid mutator transaction binding the contract method 0xa22cb465.
//
// Solidity: function setApprovalForAll(address operator, bool approved) returns()
func (_ERC721 *ERC721Session) SetApprovalForAll(operator common.Address, approved bool) (*types.Transaction, error) {
	return _ERC721.Contract.SetApprovalForAll(&_ERC721.TransactOpts, operator, approved)
}

// SetApprovalForAll is a paid mutator transaction binding the contract method 0xa22cb465.
//
// Solidity: function setApprovalForAll(address operator, bool approved) returns()
func (_ERC721 *ERC721TransactorSession) SetApprovalForAll(operator common.Address, approved bool) (*types.Transaction, error) {
	return _ERC721.Contract.SetApprovalForAll(&_ERC721.TransactOpts, operator, approved)
}

// SetCommission is a paid mutator transaction binding the contract method 0x355e6b43.
//
// Solidity: function setCommission(uint256 _val1) returns()
func (_ERC721 *ERC721Transactor) SetCommission(opts *bind.TransactOpts, _val1 *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "setCommission", _val1)
}

// SetCommission is a paid mutator transaction binding the contract method 0x355e6b43.
//
// Solidity: function setCommission(uint256 _val1) returns()
func (_ERC721 *ERC721Session) SetCommission(_val1 *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.SetCommission(&_ERC721.TransactOpts, _val1)
}

// SetCommission is a paid mutator transaction binding the contract method 0x355e6b43.
//
// Solidity: function setCommission(uint256 _val1) returns()
func (_ERC721 *ERC721TransactorSession) SetCommission(_val1 *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.SetCommission(&_ERC721.TransactOpts, _val1)
}

// TransferFrom is a paid mutator transaction binding the contract method 0x23b872dd.
//
// Solidity: function transferFrom(address from, address to, uint256 tokenId) returns()
func (_ERC721 *ERC721Transactor) TransferFrom(opts *bind.TransactOpts, from common.Address, to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "transferFrom", from, to, tokenId)
}

// TransferFrom is a paid mutator transaction binding the contract method 0x23b872dd.
//
// Solidity: function transferFrom(address from, address to, uint256 tokenId) returns()
func (_ERC721 *ERC721Session) TransferFrom(from common.Address, to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.TransferFrom(&_ERC721.TransactOpts, from, to, tokenId)
}

// TransferFrom is a paid mutator transaction binding the contract method 0x23b872dd.
//
// Solidity: function transferFrom(address from, address to, uint256 tokenId) returns()
func (_ERC721 *ERC721TransactorSession) TransferFrom(from common.Address, to common.Address, tokenId *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.TransferFrom(&_ERC721.TransactOpts, from, to, tokenId)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_ERC721 *ERC721Transactor) TransferOwnership(opts *bind.TransactOpts, newOwner common.Address) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "transferOwnership", newOwner)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_ERC721 *ERC721Session) TransferOwnership(newOwner common.Address) (*types.Transaction, error) {
	return _ERC721.Contract.TransferOwnership(&_ERC721.TransactOpts, newOwner)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_ERC721 *ERC721TransactorSession) TransferOwnership(newOwner common.Address) (*types.Transaction, error) {
	return _ERC721.Contract.TransferOwnership(&_ERC721.TransactOpts, newOwner)
}

// UpdatePresale is a paid mutator transaction binding the contract method 0xdb31882b.
//
// Solidity: function updatePresale(bool _open, bytes32 root) returns()
func (_ERC721 *ERC721Transactor) UpdatePresale(opts *bind.TransactOpts, _open bool, root [32]byte) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "updatePresale", _open, root)
}

// UpdatePresale is a paid mutator transaction binding the contract method 0xdb31882b.
//
// Solidity: function updatePresale(bool _open, bytes32 root) returns()
func (_ERC721 *ERC721Session) UpdatePresale(_open bool, root [32]byte) (*types.Transaction, error) {
	return _ERC721.Contract.UpdatePresale(&_ERC721.TransactOpts, _open, root)
}

// UpdatePresale is a paid mutator transaction binding the contract method 0xdb31882b.
//
// Solidity: function updatePresale(bool _open, bytes32 root) returns()
func (_ERC721 *ERC721TransactorSession) UpdatePresale(_open bool, root [32]byte) (*types.Transaction, error) {
	return _ERC721.Contract.UpdatePresale(&_ERC721.TransactOpts, _open, root)
}

// UpdateReferral is a paid mutator transaction binding the contract method 0xfe25219a.
//
// Solidity: function updateReferral(bool _open, uint256 _val) returns()
func (_ERC721 *ERC721Transactor) UpdateReferral(opts *bind.TransactOpts, _open bool, _val *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "updateReferral", _open, _val)
}

// UpdateReferral is a paid mutator transaction binding the contract method 0xfe25219a.
//
// Solidity: function updateReferral(bool _open, uint256 _val) returns()
func (_ERC721 *ERC721Session) UpdateReferral(_open bool, _val *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateReferral(&_ERC721.TransactOpts, _open, _val)
}

// UpdateReferral is a paid mutator transaction binding the contract method 0xfe25219a.
//
// Solidity: function updateReferral(bool _open, uint256 _val) returns()
func (_ERC721 *ERC721TransactorSession) UpdateReferral(_open bool, _val *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateReferral(&_ERC721.TransactOpts, _open, _val)
}

// UpdateReqToken is a paid mutator transaction binding the contract method 0x1012c330.
//
// Solidity: function updateReqToken(address _address) returns()
func (_ERC721 *ERC721Transactor) UpdateReqToken(opts *bind.TransactOpts, _address common.Address) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "updateReqToken", _address)
}

// UpdateReqToken is a paid mutator transaction binding the contract method 0x1012c330.
//
// Solidity: function updateReqToken(address _address) returns()
func (_ERC721 *ERC721Session) UpdateReqToken(_address common.Address) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateReqToken(&_ERC721.TransactOpts, _address)
}

// UpdateReqToken is a paid mutator transaction binding the contract method 0x1012c330.
//
// Solidity: function updateReqToken(address _address) returns()
func (_ERC721 *ERC721TransactorSession) UpdateReqToken(_address common.Address) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateReqToken(&_ERC721.TransactOpts, _address)
}

// UpdateReveal is a paid mutator transaction binding the contract method 0x828c12ce.
//
// Solidity: function updateReveal(bool _revealed, string _uri) returns()
func (_ERC721 *ERC721Transactor) UpdateReveal(opts *bind.TransactOpts, _revealed bool, _uri string) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "updateReveal", _revealed, _uri)
}

// UpdateReveal is a paid mutator transaction binding the contract method 0x828c12ce.
//
// Solidity: function updateReveal(bool _revealed, string _uri) returns()
func (_ERC721 *ERC721Session) UpdateReveal(_revealed bool, _uri string) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateReveal(&_ERC721.TransactOpts, _revealed, _uri)
}

// UpdateReveal is a paid mutator transaction binding the contract method 0x828c12ce.
//
// Solidity: function updateReveal(bool _revealed, string _uri) returns()
func (_ERC721 *ERC721TransactorSession) UpdateReveal(_revealed bool, _uri string) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateReveal(&_ERC721.TransactOpts, _revealed, _uri)
}

// UpdateRoyalties is a paid mutator transaction binding the contract method 0x6c2f5acd.
//
// Solidity: function updateRoyalties(address _recipient, uint256 _fee) returns()
func (_ERC721 *ERC721Transactor) UpdateRoyalties(opts *bind.TransactOpts, _recipient common.Address, _fee *big.Int) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "updateRoyalties", _recipient, _fee)
}

// UpdateRoyalties is a paid mutator transaction binding the contract method 0x6c2f5acd.
//
// Solidity: function updateRoyalties(address _recipient, uint256 _fee) returns()
func (_ERC721 *ERC721Session) UpdateRoyalties(_recipient common.Address, _fee *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateRoyalties(&_ERC721.TransactOpts, _recipient, _fee)
}

// UpdateRoyalties is a paid mutator transaction binding the contract method 0x6c2f5acd.
//
// Solidity: function updateRoyalties(address _recipient, uint256 _fee) returns()
func (_ERC721 *ERC721TransactorSession) UpdateRoyalties(_recipient common.Address, _fee *big.Int) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateRoyalties(&_ERC721.TransactOpts, _recipient, _fee)
}

// UpdateSale is a paid mutator transaction binding the contract method 0x1d02161d.
//
// Solidity: function updateSale(bool _open, uint256 _cost, uint32 _maxW, uint32 _maxM) returns()
func (_ERC721 *ERC721Transactor) UpdateSale(opts *bind.TransactOpts, _open bool, _cost *big.Int, _maxW uint32, _maxM uint32) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "updateSale", _open, _cost, _maxW, _maxM)
}

// UpdateSale is a paid mutator transaction binding the contract method 0x1d02161d.
//
// Solidity: function updateSale(bool _open, uint256 _cost, uint32 _maxW, uint32 _maxM) returns()
func (_ERC721 *ERC721Session) UpdateSale(_open bool, _cost *big.Int, _maxW uint32, _maxM uint32) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateSale(&_ERC721.TransactOpts, _open, _cost, _maxW, _maxM)
}

// UpdateSale is a paid mutator transaction binding the contract method 0x1d02161d.
//
// Solidity: function updateSale(bool _open, uint256 _cost, uint32 _maxW, uint32 _maxM) returns()
func (_ERC721 *ERC721TransactorSession) UpdateSale(_open bool, _cost *big.Int, _maxW uint32, _maxM uint32) (*types.Transaction, error) {
	return _ERC721.Contract.UpdateSale(&_ERC721.TransactOpts, _open, _cost, _maxW, _maxM)
}

// Withdraw is a paid mutator transaction binding the contract method 0x3ccfd60b.
//
// Solidity: function withdraw() payable returns()
func (_ERC721 *ERC721Transactor) Withdraw(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _ERC721.contract.Transact(opts, "withdraw")
}

// Withdraw is a paid mutator transaction binding the contract method 0x3ccfd60b.
//
// Solidity: function withdraw() payable returns()
func (_ERC721 *ERC721Session) Withdraw() (*types.Transaction, error) {
	return _ERC721.Contract.Withdraw(&_ERC721.TransactOpts)
}

// Withdraw is a paid mutator transaction binding the contract method 0x3ccfd60b.
//
// Solidity: function withdraw() payable returns()
func (_ERC721 *ERC721TransactorSession) Withdraw() (*types.Transaction, error) {
	return _ERC721.Contract.Withdraw(&_ERC721.TransactOpts)
}

// ERC721ApprovalIterator is returned from FilterApproval and is used to iterate over the raw logs and unpacked data for Approval events raised by the ERC721 contract.
type ERC721ApprovalIterator struct {
	Event *ERC721Approval // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *ERC721ApprovalIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(ERC721Approval)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(ERC721Approval)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *ERC721ApprovalIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *ERC721ApprovalIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// ERC721Approval represents a Approval event raised by the ERC721 contract.
type ERC721Approval struct {
	Owner    common.Address
	Approved common.Address
	TokenId  *big.Int
	Raw      types.Log // Blockchain specific contextual infos
}

// FilterApproval is a free log retrieval operation binding the contract event 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925.
//
// Solidity: event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
func (_ERC721 *ERC721Filterer) FilterApproval(opts *bind.FilterOpts, owner []common.Address, approved []common.Address, tokenId []*big.Int) (*ERC721ApprovalIterator, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var approvedRule []interface{}
	for _, approvedItem := range approved {
		approvedRule = append(approvedRule, approvedItem)
	}
	var tokenIdRule []interface{}
	for _, tokenIdItem := range tokenId {
		tokenIdRule = append(tokenIdRule, tokenIdItem)
	}

	logs, sub, err := _ERC721.contract.FilterLogs(opts, "Approval", ownerRule, approvedRule, tokenIdRule)
	if err != nil {
		return nil, err
	}
	return &ERC721ApprovalIterator{contract: _ERC721.contract, event: "Approval", logs: logs, sub: sub}, nil
}

// WatchApproval is a free log subscription operation binding the contract event 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925.
//
// Solidity: event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
func (_ERC721 *ERC721Filterer) WatchApproval(opts *bind.WatchOpts, sink chan<- *ERC721Approval, owner []common.Address, approved []common.Address, tokenId []*big.Int) (event.Subscription, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var approvedRule []interface{}
	for _, approvedItem := range approved {
		approvedRule = append(approvedRule, approvedItem)
	}
	var tokenIdRule []interface{}
	for _, tokenIdItem := range tokenId {
		tokenIdRule = append(tokenIdRule, tokenIdItem)
	}

	logs, sub, err := _ERC721.contract.WatchLogs(opts, "Approval", ownerRule, approvedRule, tokenIdRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(ERC721Approval)
				if err := _ERC721.contract.UnpackLog(event, "Approval", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseApproval is a log parse operation binding the contract event 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925.
//
// Solidity: event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
func (_ERC721 *ERC721Filterer) ParseApproval(log types.Log) (*ERC721Approval, error) {
	event := new(ERC721Approval)
	if err := _ERC721.contract.UnpackLog(event, "Approval", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// ERC721ApprovalForAllIterator is returned from FilterApprovalForAll and is used to iterate over the raw logs and unpacked data for ApprovalForAll events raised by the ERC721 contract.
type ERC721ApprovalForAllIterator struct {
	Event *ERC721ApprovalForAll // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *ERC721ApprovalForAllIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(ERC721ApprovalForAll)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(ERC721ApprovalForAll)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *ERC721ApprovalForAllIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *ERC721ApprovalForAllIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// ERC721ApprovalForAll represents a ApprovalForAll event raised by the ERC721 contract.
type ERC721ApprovalForAll struct {
	Owner    common.Address
	Operator common.Address
	Approved bool
	Raw      types.Log // Blockchain specific contextual infos
}

// FilterApprovalForAll is a free log retrieval operation binding the contract event 0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31.
//
// Solidity: event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
func (_ERC721 *ERC721Filterer) FilterApprovalForAll(opts *bind.FilterOpts, owner []common.Address, operator []common.Address) (*ERC721ApprovalForAllIterator, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var operatorRule []interface{}
	for _, operatorItem := range operator {
		operatorRule = append(operatorRule, operatorItem)
	}

	logs, sub, err := _ERC721.contract.FilterLogs(opts, "ApprovalForAll", ownerRule, operatorRule)
	if err != nil {
		return nil, err
	}
	return &ERC721ApprovalForAllIterator{contract: _ERC721.contract, event: "ApprovalForAll", logs: logs, sub: sub}, nil
}

// WatchApprovalForAll is a free log subscription operation binding the contract event 0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31.
//
// Solidity: event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
func (_ERC721 *ERC721Filterer) WatchApprovalForAll(opts *bind.WatchOpts, sink chan<- *ERC721ApprovalForAll, owner []common.Address, operator []common.Address) (event.Subscription, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var operatorRule []interface{}
	for _, operatorItem := range operator {
		operatorRule = append(operatorRule, operatorItem)
	}

	logs, sub, err := _ERC721.contract.WatchLogs(opts, "ApprovalForAll", ownerRule, operatorRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(ERC721ApprovalForAll)
				if err := _ERC721.contract.UnpackLog(event, "ApprovalForAll", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseApprovalForAll is a log parse operation binding the contract event 0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31.
//
// Solidity: event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
func (_ERC721 *ERC721Filterer) ParseApprovalForAll(log types.Log) (*ERC721ApprovalForAll, error) {
	event := new(ERC721ApprovalForAll)
	if err := _ERC721.contract.UnpackLog(event, "ApprovalForAll", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// ERC721OwnershipTransferredIterator is returned from FilterOwnershipTransferred and is used to iterate over the raw logs and unpacked data for OwnershipTransferred events raised by the ERC721 contract.
type ERC721OwnershipTransferredIterator struct {
	Event *ERC721OwnershipTransferred // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *ERC721OwnershipTransferredIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(ERC721OwnershipTransferred)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(ERC721OwnershipTransferred)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *ERC721OwnershipTransferredIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *ERC721OwnershipTransferredIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// ERC721OwnershipTransferred represents a OwnershipTransferred event raised by the ERC721 contract.
type ERC721OwnershipTransferred struct {
	PreviousOwner common.Address
	NewOwner      common.Address
	Raw           types.Log // Blockchain specific contextual infos
}

// FilterOwnershipTransferred is a free log retrieval operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_ERC721 *ERC721Filterer) FilterOwnershipTransferred(opts *bind.FilterOpts, previousOwner []common.Address, newOwner []common.Address) (*ERC721OwnershipTransferredIterator, error) {

	var previousOwnerRule []interface{}
	for _, previousOwnerItem := range previousOwner {
		previousOwnerRule = append(previousOwnerRule, previousOwnerItem)
	}
	var newOwnerRule []interface{}
	for _, newOwnerItem := range newOwner {
		newOwnerRule = append(newOwnerRule, newOwnerItem)
	}

	logs, sub, err := _ERC721.contract.FilterLogs(opts, "OwnershipTransferred", previousOwnerRule, newOwnerRule)
	if err != nil {
		return nil, err
	}
	return &ERC721OwnershipTransferredIterator{contract: _ERC721.contract, event: "OwnershipTransferred", logs: logs, sub: sub}, nil
}

// WatchOwnershipTransferred is a free log subscription operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_ERC721 *ERC721Filterer) WatchOwnershipTransferred(opts *bind.WatchOpts, sink chan<- *ERC721OwnershipTransferred, previousOwner []common.Address, newOwner []common.Address) (event.Subscription, error) {

	var previousOwnerRule []interface{}
	for _, previousOwnerItem := range previousOwner {
		previousOwnerRule = append(previousOwnerRule, previousOwnerItem)
	}
	var newOwnerRule []interface{}
	for _, newOwnerItem := range newOwner {
		newOwnerRule = append(newOwnerRule, newOwnerItem)
	}

	logs, sub, err := _ERC721.contract.WatchLogs(opts, "OwnershipTransferred", previousOwnerRule, newOwnerRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(ERC721OwnershipTransferred)
				if err := _ERC721.contract.UnpackLog(event, "OwnershipTransferred", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseOwnershipTransferred is a log parse operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_ERC721 *ERC721Filterer) ParseOwnershipTransferred(log types.Log) (*ERC721OwnershipTransferred, error) {
	event := new(ERC721OwnershipTransferred)
	if err := _ERC721.contract.UnpackLog(event, "OwnershipTransferred", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// ERC721TransferIterator is returned from FilterTransfer and is used to iterate over the raw logs and unpacked data for Transfer events raised by the ERC721 contract.
type ERC721TransferIterator struct {
	Event *ERC721Transfer // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *ERC721TransferIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(ERC721Transfer)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(ERC721Transfer)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *ERC721TransferIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *ERC721TransferIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// ERC721Transfer represents a Transfer event raised by the ERC721 contract.
type ERC721Transfer struct {
	From    common.Address
	To      common.Address
	TokenId *big.Int
	Raw     types.Log // Blockchain specific contextual infos
}

// FilterTransfer is a free log retrieval operation binding the contract event 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef.
//
// Solidity: event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
func (_ERC721 *ERC721Filterer) FilterTransfer(opts *bind.FilterOpts, from []common.Address, to []common.Address, tokenId []*big.Int) (*ERC721TransferIterator, error) {

	var fromRule []interface{}
	for _, fromItem := range from {
		fromRule = append(fromRule, fromItem)
	}
	var toRule []interface{}
	for _, toItem := range to {
		toRule = append(toRule, toItem)
	}
	var tokenIdRule []interface{}
	for _, tokenIdItem := range tokenId {
		tokenIdRule = append(tokenIdRule, tokenIdItem)
	}

	logs, sub, err := _ERC721.contract.FilterLogs(opts, "Transfer", fromRule, toRule, tokenIdRule)
	if err != nil {
		return nil, err
	}
	return &ERC721TransferIterator{contract: _ERC721.contract, event: "Transfer", logs: logs, sub: sub}, nil
}

// WatchTransfer is a free log subscription operation binding the contract event 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef.
//
// Solidity: event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
func (_ERC721 *ERC721Filterer) WatchTransfer(opts *bind.WatchOpts, sink chan<- *ERC721Transfer, from []common.Address, to []common.Address, tokenId []*big.Int) (event.Subscription, error) {

	var fromRule []interface{}
	for _, fromItem := range from {
		fromRule = append(fromRule, fromItem)
	}
	var toRule []interface{}
	for _, toItem := range to {
		toRule = append(toRule, toItem)
	}
	var tokenIdRule []interface{}
	for _, tokenIdItem := range tokenId {
		tokenIdRule = append(tokenIdRule, tokenIdItem)
	}

	logs, sub, err := _ERC721.contract.WatchLogs(opts, "Transfer", fromRule, toRule, tokenIdRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(ERC721Transfer)
				if err := _ERC721.contract.UnpackLog(event, "Transfer", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseTransfer is a log parse operation binding the contract event 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef.
//
// Solidity: event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
func (_ERC721 *ERC721Filterer) ParseTransfer(log types.Log) (*ERC721Transfer, error) {
	event := new(ERC721Transfer)
	if err := _ERC721.contract.UnpackLog(event, "Transfer", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}
