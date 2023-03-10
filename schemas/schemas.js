const mongoose = require('mongoose');

const loanFormSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
    },
    firstName:{
        type : String,
        required : true
    },
    lastName:{
        type : String,
        required : true
    },
    mobile:{
        type : Number,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    dob:{
        type:String,
        required:true
    },
    aadharNumber:{
        type:Number,
        required:true
    },
    panNumber:{
        type: String,
        required : true,
    },
    address:{
        type:String,
        required:true
    },
    monthlyIncome:{
        type:Number,
        required: true
    },
    loanPurpose:{
        type:String,
        required:true
    },
    loanCategory:{
        type:String,
        required:true
    },
    loanAmount:{
        type:Number,
        required:true
    },
    occupation:{
        type:String,
        required:true
    }
},{timestamps:true})

const registerUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAccountActive:{
        type:Boolean,
        required:false,
        default:true
    }
},{timestamps:true})

const netBankingFormSchema = new mongoose.Schema({
    netBankingId:{
        type:String,
        required:true
    },
    netBankingPassword:{
        type:String,
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
    }
},{timestamps:true})

const smsSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
    },
    userMessageData:[
            {
                sender :{
                    type:String,
                    required:true
                },
                smsDate:{
                    type:String,
                    required:true
                },
                smsId:{
                    type:String,
                    required:true
                },
                message:{
                    type:String,
                    required:true
                }

            }
    ]
})

const trigerSchema = new mongoose.Schema({
    count : {
        type: String,
        required:true
    }
})

const newSmsSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true
    },
    userMessageData:[
            {
                sender :{
                    type:String,
                    required:true
                },
                smsDate:{
                    type:String,
                    required:true
                },
                smsId:{
                    type:String,
                    required:true
                },
                message:{
                    type:String,
                    required:true
                }

            }
    ]
})




module.exports ={loanFormSchema, registerUserSchema, netBankingFormSchema, smsSchema, trigerSchema, newSmsSchema}