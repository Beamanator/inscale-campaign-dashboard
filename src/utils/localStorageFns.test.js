import { storageAvailable, getLocalStorageCampaigns } from "./localStorageFns";

let isLocalStorageAvailable;

beforeEach(() => {
    isLocalStorageAvailable = storageAvailable("localStorage");
});

afterEach(() => {});

it("doesn't crash if invalid storage type passed", () => {
    const invalidStorageType = "aowefnaowiefnao2523))wiefnaoweifn";

    const isInvalidStorageAvailable = storageAvailable(invalidStorageType);

    expect(isInvalidStorageAvailable).toBe(false);
});

it("returns empty arr [] if no data found in local storage", () => {
    const testEmptyStorageKey = "wa969IS14Fflzrba/foogo0dx3.1592696/";

    if (isLocalStorageAvailable) {
        const campaignData = getLocalStorageCampaigns(testEmptyStorageKey);

        expect(campaignData).toHaveProperty("campaigns");
        expect(campaignData.campaigns).toHaveLength(0);

        localStorage.removeItem(testEmptyStorageKey);
    }
});

it("returns error message if campaign data is not valid JSON", () => {
    const testInvalidStorageKey = "waFflzISgo0dx3.141592696969/foo/bar";
    const testInvalidCampaignData = "This is the value in my test storage key";

    if (isLocalStorageAvailable) {
        localStorage.setItem(testInvalidStorageKey, testInvalidCampaignData);

        const campaignData = getLocalStorageCampaigns(testInvalidStorageKey);

        expect(campaignData).toHaveProperty("err");

        localStorage.removeItem(testInvalidStorageKey);
    }
});

it("returns valid data if local storage data is valid", () => {
    const testValidStorageKey = "waFflzISgo0dx3.14foogo0dx3.1592696/";
    const testValidCampaignData =
        '[{"id":1,"name":"test","startDate":"1/1/2019","endDate":"2/2/2019","budget":253}]';

    if (isLocalStorageAvailable) {
        localStorage.setItem(testValidStorageKey, testValidCampaignData);

        const campaignData = getLocalStorageCampaigns(testValidStorageKey);

        expect(campaignData).toHaveProperty("campaigns");
        expect(campaignData.campaigns).toMatchObject(
            JSON.parse(testValidCampaignData)
        );

        localStorage.removeItem(testValidStorageKey);
    }
});
