export type TourContents = {
    townName: string,
    date: Date,
    image?: string,

}
export type TourId = 'nashville-tn'
    | 'boise-id'
    | 'santa-fe-nm';

const tourIds: Array<TourId> = [
    'nashville-tn', 'boise-id', 'santa-fe-nm'
];

const tourInfo: { [id in TourId]: TourContents } = {
    'nashville-tn': {
        townName: 'Nashville, TN',
        date: new Date('5/10/2022')
    },
    'boise-id': {
        townName: 'Boise, ID',
        date: new Date('5/11/2022')
    },
    'santa-fe-nm': {

        townName: 'Santa Fe, NM',
        date: new Date('5/12/2022')

    }
};

export const getTourContents = async (id: TourId) => {
    return Promise.resolve(tourInfo[id]);
}