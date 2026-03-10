import Text "mo:core/Text";
import Int "mo:core/Int";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    phone : Text;
    email : Text;
    serviceType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(sub1 : Submission, sub2 : Submission) : Order.Order {
      Int.compare(sub2.timestamp, sub1.timestamp);
    };
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitForm(name : Text, phone : Text, email : Text, serviceType : Text, message : Text) : async () {
    let newSubmission : Submission = {
      name;
      phone;
      email;
      serviceType;
      message;
      timestamp = Time.now();
    };

    submissions.add(newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getSubmissionByEmail(email : Text) : async Submission {
    switch (submissions.find(func(s) { s.email == email })) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
