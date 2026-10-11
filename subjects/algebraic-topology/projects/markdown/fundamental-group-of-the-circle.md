# Fundamental Group of the Circle

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** AT-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Prove $\pi_1(S^1,1)\cong\mathbb Z$ using the covering map $p:\mathbb R\to S^1$, $p(t)=e^{2\pi it}$.

**Foundations and permitted imports:**

Use the covering p:R→S¹, p(t)=e^(2πit). Import path lifting with prescribed initial value and homotopy lifting for a covering map: a path, or a homotopy of paths, has a unique continuous lift after an initial lift is fixed. Here evenly covered arcs supply the local inverses, and compact subdivision supplies global lifting. Based loops start/end at 1; their chosen lifts start at 0.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Winding number is well-defined
N2 [v1] Group law and surjectivity
  N1 -- E1: An integer winding invariant onπ₁(S¹,1). --> N2
N3 [v1] Trivial kernel
  N2 -- E2: A surjective homomorphism w:π₁(S¹,1)→Z. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | An integer winding invariant onπ₁(S¹,1). | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | A surjective homomorphism w:π₁(S¹,1)→Z. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Winding number is well-defined

**Object, role, and local target:** Read the integer endpoint and audit based homotopies. The required export is: An integer winding invariant onπ₁(S¹,1).

**Inputs:** A based loopα and its liftαtilde; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain A based loopα and its liftαtilde; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Read the integer endpoint and audit based homotopies. |
| Sense | The basepoint must remain fixed during the homotopy. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** An integer winding invariant onπ₁(S¹,1). Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Group law and surjectivity

**Object, role, and local target:** Translate the second lift before concatenating. The required export is: A surjective homomorphism w:π₁(S¹,1)→Z.

**Inputs:** Two lifted loops and their endpoints; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Two lifted loops and their endpoints; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Translate the second lift before concatenating. |
| Sense | Concatenating two lifts both based at 0 would create a discontinuity unless the first winding is 0. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** A surjective homomorphism w:π₁(S¹,1)→Z. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Trivial kernel

**Object, role, and local target:** Contract the closed lifted loop and project. The required export is: The fundamental group of the circle with its explicit winding isomorphism.

**Inputs:** A lift with endpoint0; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-01.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain A lift with endpoint0; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Contract the closed lifted loop and project. |
| Sense | A projected contraction must preserve both loop endpoints. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** The fundamental group of the circle with its explicit winding isomorphism. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Winding number is well-defined

1. Sincep(αtilde(1))=1, the endpoint lies inZ.

2. For a based homotopy, its lift has initial endpoint0 throughout; the terminal lifted endpoint is a continuous integer-valued function of the homotopy parameter, hence constant.

3. Thusw([α])=αtilde(1) depends only on the based homotopy class.

### §4.N2 — Group law and surjectivity

1. If lifts of α andβ end at m andn, a lift of the concatenation is the lift of α followed by the lift ofβ translated bym; its endpoint is m+n.

2. Hencew is a homomorphism.

3. For eachn∈Z the loopα_n(t)=e^(2πint) has liftnt and windingn, proving surjectivity.

### §4.N3 — Trivial kernel

1. Ifw([α])=0 thenαtilde(0)=αtilde(1)=0.

2. The homotopyH(s,t)=p((1−s)αtilde(t)) is continuous, remains based at 1 at both endpoints, equalsα when s=0, and is the constant loop when s=1.

3. Thus α is null-homotopic.

4. The kernel is trivial, so the surjective homomorphism is injective and π₁(S¹,1)≅Z.

## 5. Worked instance and boundary audit

The loop e^(6πit) has lift3t and winding3. Reversing it gives−3; concatenating it with e^(−4πit) gives winding1. The covering itself identifies endpoint changes rather than relying on a picture of turns.

**Boundary or failed-argument audit:**

An open path ending at−1 lifts to an endpoint in1/2+Z, notZ, so it does not define this loop invariant. Sense checks the endpoint and based-homotopy conditions before exporting an integer.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `AT-01`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Allen Hatcher, Algebraic Topology: covering spaces, cellular homology, and cap products](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf).

[Branch index](../README.md)
