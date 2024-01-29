export const TopBarCMSHub = () => {
  return (
    <div className={cx("c-bg-[#f5f8fa]")}>
      <div className={cx(`c-flex c-w-full`)}>
        <div className={cx(`c-cursor-pointer c-px-6 c-py-6`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            viewBox="0 -960 960 960"
            width="25"
          >
            <path d="M637.999-355.847v-248.306L513.461-480l124.538 124.153ZM198.924-142.771q-22.961 0-39.557-16.596-16.596-16.596-16.596-39.557v-562.152q0-22.961 16.596-39.557 16.596-16.596 39.557-16.596h562.152q22.961 0 39.557 16.596 16.596 16.596 16.596 39.557v562.152q0 22.961-16.596 39.557-16.596 16.596-39.557 16.596H198.924Zm125.23-43.845v-586.768h-125.23q-4.615 0-8.462 3.846-3.846 3.847-3.846 8.462v562.152q0 4.615 3.846 8.462 3.847 3.846 8.462 3.846h125.23Zm43.845 0h393.077q4.615 0 8.462-3.846 3.846-3.847 3.846-8.462v-562.152q0-4.615-3.846-8.462-3.847-3.846-8.462-3.846H367.999v586.768Zm-43.845 0H186.616h137.538Z" />
          </svg>
        </div>
        <div className={cx(`c-flex c-flex-1 c-justify-between c-items-center`, css``)}>
            <div className={cx(`c-flex c-items-center c-space-x-2`, css``)}>
                <div className={cx(`c-text-2xl`, css``)}>Structure</div>
                <div className={cx(`c-text-[#5E5ADB] c-font-bold c-text-base  rounded-full c-bg-[#eaeaf6] c-px-2 c-py-1`, css``)}>27</div>
            </div>
            <div>Kanan</div>
        </div>
      </div>
    </div>
  );
};
