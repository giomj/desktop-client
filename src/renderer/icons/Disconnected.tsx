import React from 'react';
import { makeStyles, SvgIcon } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  iconStyle: {
    height: '20px',
    width: '20px',
  },
}));

const Disconnected = (): JSX.Element => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox="0 0 20 20" className={classes.iconStyle}>
      <path
        d="M13.8713 12.0651C14.0018 12.1184 14.1416 12.1454 14.2825 12.1446C14.4242 12.144 14.5644 12.1153 14.6949 12.0601C14.8255 12.005 14.9438 11.9244 15.043 11.8232L16.5532 10.2702C16.8527 9.97168 17.0904 9.61697 17.2526 9.2264C17.4147 8.83583 17.4982 8.41709 17.4982 7.99419C17.4982 7.57129 17.4147 7.15255 17.2526 6.76198C17.0904 6.37141 16.8527 6.0167 16.5532 5.71818L14.2825 3.4154C13.6669 2.81801 12.8429 2.48389 11.9851 2.48389C11.1273 2.48389 10.3032 2.81801 9.68765 3.4154L8.16675 4.93631C8.06688 5.03617 7.98767 5.15473 7.93362 5.28521C7.87957 5.41569 7.85176 5.55553 7.85176 5.69676C7.85176 5.98199 7.96506 6.25553 8.16675 6.45722C8.26661 6.55708 8.38517 6.6363 8.51565 6.69034C8.64612 6.74439 8.78597 6.77221 8.9272 6.77221C9.06843 6.77221 9.20828 6.74439 9.33876 6.69034C9.46923 6.6363 9.58779 6.55708 9.68765 6.45722L11.1979 4.93631C11.2974 4.83592 11.4159 4.75624 11.5464 4.70186C11.6769 4.64749 11.8169 4.61949 11.9583 4.61949C12.0997 4.61949 12.2397 4.64749 12.3702 4.70186C12.5007 4.75624 12.6192 4.83592 12.7188 4.93631L15.043 7.27122C15.1434 7.37079 15.223 7.48925 15.2774 7.61977C15.3318 7.75029 15.3598 7.89029 15.3598 8.03168C15.3598 8.17307 15.3318 8.31306 15.2774 8.44358C15.223 8.5741 15.1434 8.69256 15.043 8.79213L13.5221 10.313C13.4217 10.4126 13.342 10.5311 13.2876 10.6616C13.2332 10.7921 13.2052 10.9321 13.2052 11.0735C13.2052 11.2149 13.2332 11.3549 13.2876 11.4854C13.342 11.6159 13.4217 11.7344 13.5221 11.8339C13.6221 11.9332 13.7408 12.0118 13.8713 12.0651Z"
        fill="black"
        fillOpacity="0.26"
      />
      <path
        d="M9.62326 8.80218L10.576 7.86016C10.7805 7.65279 11.059 7.53516 11.3503 7.53316C11.6415 7.53115 11.9217 7.64492 12.129 7.84944C12.3364 8.05397 12.454 8.3325 12.456 8.62375C12.458 8.915 12.3443 9.19512 12.1397 9.40248L11.187 10.3766L9.62326 8.80218Z"
        fill="black"
        fillOpacity="0.26"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.81152 6.30968C2.79777 6.16536 2.81346 6.01975 2.85764 5.88167C2.90183 5.74359 2.97359 5.61591 3.06857 5.50639C3.16887 5.39767 3.29059 5.3109 3.42608 5.25156C3.56157 5.19221 3.70788 5.16158 3.8558 5.16158C4.00372 5.16158 4.15003 5.19221 4.28552 5.25156C4.42101 5.3109 4.54273 5.39767 4.64303 5.50639L14.4239 15.2979C14.6312 15.5025 14.7489 15.781 14.7509 16.0723C14.7529 16.3635 14.6391 16.6436 14.4346 16.851C14.2301 17.0584 13.9515 17.176 13.6603 17.178C13.369 17.18 13.0889 17.0662 12.8816 16.8617L11.4413 15.4246L10.3091 16.5568C9.7071 17.1596 8.89036 17.4986 8.03846 17.4994C7.18656 17.4986 6.36982 17.1596 5.76781 16.5568L3.4436 14.2219C3.14405 13.9234 2.90637 13.5687 2.74419 13.1781C2.58202 12.7876 2.49854 12.3688 2.49854 11.9459C2.49854 11.523 2.58202 11.1043 2.74419 10.7137C2.90637 10.3231 3.14405 9.96843 3.4436 9.66991L4.5576 8.55592L3.06857 7.07014C2.88754 6.85956 2.79538 6.58691 2.81152 6.30968ZM6.07481 10.0698L4.9538 11.1908C4.85341 11.2904 4.77373 11.4088 4.71935 11.5394C4.66498 11.6699 4.63698 11.8099 4.63698 11.9513C4.63698 12.0927 4.66498 12.2327 4.71935 12.3632C4.77373 12.4937 4.85341 12.6122 4.9538 12.7117L7.278 15.0359C7.37757 15.1363 7.49603 15.216 7.62655 15.2704C7.75707 15.3248 7.89707 15.3527 8.03846 15.3527C8.17985 15.3527 8.31984 15.3248 8.45036 15.2704C8.58088 15.216 8.69934 15.1363 8.79891 15.0359L9.92412 13.9107L6.07481 10.0698Z"
        fill="black"
        fillOpacity="0.26"
      />
    </SvgIcon>
  );
};
export default Disconnected;
