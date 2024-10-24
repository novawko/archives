/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1V1l2MQSRTKofZb0Y3JJ8qyak4Iutf8pLhhCybdAIsWw";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    masterlist: "kitiguars masterlist",
    masterlistLog: "kitiguars masterlist log",
    faq: "news",
    masterlistLog: "nova's characters log",
    masterlist: "nova's characters",
    prompts: "prompts",
    faq: "faq",
    staff: "friends",

}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 3,

        staffSheetPage: sheetPages.friends,
        numOfStaff: 8,

        masterlistSheetPage: sheetPages.novasCharacters,
        numOfCharacters: 4,
		
	masterlistSheetPage: sheetPages.kitiguarsMasterlist,
        numOfKitiguars: 4,
    
    },


    /* Kitiguars Masterlist
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.kitiguarsMasterlist,
        logSheetPage: sheetPages.kitiguarsMasterlistLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',

    },
	
    /* Nova's Characters
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.novasCharacters,
        logSheetPage: sheetPages.novasCharactersLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',

    },


    /* Prompts
    /* --------------------------------------------------------------- */
    prompts: {
    
        sheetPage: sheetPages.prompts,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title'],
    
    },


    /* Friends List
    /* --------------------------------------------------------------- */
    staff: {
    
        sheetPage: sheetPages.friends,
    
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.faq,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        searchFilterParams: ['Tags'],
    
    },


    /* News
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.news,
    
        itemAmount: 24,
        itemOrder: "asc",

	searchFilterParams: ['Tags'],
    
    },

}
