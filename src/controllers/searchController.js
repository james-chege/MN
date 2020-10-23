import HttpError from "../utils/http-error";
import scraper from "../utils/scrapper";

const filterData = (values, data, types, inclusive) => {
    if (inclusive) {
        return data.filter(
            (data) =>
                data[types[0]] === values[types[0]] &&
                data[types[1]] === values[types[1]]
        );
    }
    return data.filter(
        (data) =>
            data[types[0]] === values[types[0]] ||
            data[types[1]] === values[types[1]]
    );
};

export default {
    getSite: async (req, res, next) => {
        const MCC_URL = `${process.env.MCC_URL}/`;
        try {
            scraper.getSite(MCC_URL).then(function (tableData) {
                const FileSystem = require("fs");
                FileSystem.writeFile(
                    "mcc-mnc.json",
                    JSON.stringify(tableData[0]),
                    (err) => {
                        if (err) throw err;
                    }
                );

                return res.json({ result: tableData[0] });
            });
        } catch (e) {
            return next(new HttpError("Something went wrong.", 500));
        }
    },
    getMncMcc: async (req, res) => {
        const url = `${process.env.MCC_URL}/`;
        scraper.getSite(url).then(function (tableData) {
            const searchResult = filterData(
                {
                    MNC: req.query.mnc,
                    MCC: req.query.mcc,
                },
                tableData[0],
                ["MNC", "MCC"],
                true
            );
            return res.json({ result: searchResult });
        });
    },
    getMccCountry: async (req, res, next) => {
        const url = `${process.env.MCC_URL}/`;
        scraper.getSite(url).then(function (tableData) {
            const searchResult = filterData(
                { MCC: req.query.mcc, Country: req.query.country },
                tableData[0],
                ["Country", "MCC"],
                false
            );
            return res.json({ result: searchResult });
        });
    },
};
