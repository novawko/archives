/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1V1l2MQSRTKofZb0Y3JJ8qyak4Iutf8pLhhCybdAIsWw";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    kitiguarsMasterlist: "kitiguars masterlist",
    kitiguarsMasterlistLog: "kitiguars masterlist log",
    news: "news",
    novasCharactersLog: "nova's characters log",
    novasCharacters: "nova's characters",
    prompts: "prompts",
    faq: "faq",
    friends: "friends",

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

        friendsSheetPage: sheetPages.friends,
        numOfFriends: 8,

        novasCharactersSheetPage: sheetPages.novasCharacters,
        numOfCharacters: 4,
		
	kitiguarsMasterlistSheetPage: sheetPages.kitiguarsMasterlist,
        numOfKitiguars: 4,
    
    },


    /* Kitiguars Masterlist
    /* --------------------------------------------------------------- */
    kitiguarsMasterlist: {

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
    novasCharacters: {

        sheetPage: sheetPages.novasCharacters,
        logSheetPage: sheetPages.novasCharactersLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species', 'Gender',

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
    friends: {
    
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
    news: {
    
        sheetPage: sheetPages.news,
    
        itemAmount: 24,
        itemOrder: "asc",
    
    },

}
