"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data.source"));
const ProductEntry_entitys_1 = require("../../entities/ProductEntry.entitys");
const AppErros_1 = require("../../errors/AppErros");
const listProductEntriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const productEntryRepository = data_source_1.default.getRepository(ProductEntry_entitys_1.ProductEntry);
    const productEntries = yield productEntryRepository.find();
    if (!productEntries) {
        throw new AppErros_1.AppError("Product entries not found", 404);
    }
    return productEntries;
});
exports.default = listProductEntriesService;
