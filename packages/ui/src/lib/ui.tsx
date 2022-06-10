/* eslint-disable-next-line */
export interface UiProps { }

export function Ui(props: UiProps) {
  return (
    <div className='test'>
      <style jsx>{`
        div {
          color: pink;
        }
      `}</style>
      <h1>Welcome to Ui! just kidding</h1>
    </div>
  );
}

export default Ui;
