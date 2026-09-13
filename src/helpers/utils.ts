export  function getSafeParam (param: string | string[] | undefined, fallback: string): string {
    if (!param) return fallback;
    return Array.isArray(param) ? param[0] : param;
}