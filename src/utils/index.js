export function porcentaje(params) {
    let width
    (params >= 0 && params <= 9) ? width = 'w-1/12' :
        (params > 9 && params <= 18) ? width = 'w-2/12' :
            (params > 18 && params <= 27) ? width = 'w-3/12' :
                (params > 27 && params <= 36) ? width = 'w-4/12' :
                    (params > 36 && params <= 45) ? width = 'w-5/12' :
                        (params > 45 && params <= 54) ? width = 'w-6/12' :
                            (params > 54 && params <= 63) ? width = 'w-7/12' :
                                (params > 63 && params <= 72) ? width = 'w-8/12' :
                                    (params > 72 && params <= 81) ? width = 'w-9/12' :
                                        (params > 81 && params <= 90) ? width = 'w-10/12' :
                                            (params > 90 && params <= 99) ? width = 'w-11/12' :
                                                width = 'w-full'
    return width
}