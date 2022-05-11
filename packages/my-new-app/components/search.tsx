export const Search = (props: { showSearch: Boolean, onClick: () => void }) => (
    <div className="flex relative">
        <button className="w-5 h-5 flex" onClick={props.onClick}>
            <span className="bg-[url('https://jaws-prod.cdn.pbs.org/1.30.0/header/img/pbs_lens.svg')] w-5 h-5 bg-contain" />
        </button>
        {props.showSearch && (
            <div className="absolute top-full z-50 bg-white">
                <span> hi </span>
            </div>
        )}
    </div>
)

export default Search;